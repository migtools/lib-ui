import * as React from 'react';

const getValueFromStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const itemJSON = window.localStorage.getItem(key);
    return itemJSON ? (JSON.parse(itemJSON) as T) : defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

const setValueInStorage = <T>(key: string, newValue: T | undefined) => {
  if (typeof window === 'undefined') return;
  try {
    if (newValue !== undefined) {
      const newValueJSON = JSON.stringify(newValue);
      window.localStorage.setItem(key, newValueJSON);
      // setItem only causes the StorageEvent to be dispatched in other windows. We dispatch it here
      // manually so that all instances of useLocalStorage on this window also react to this change.
      window.dispatchEvent(new StorageEvent('storage', { key, newValue: newValueJSON }));
    } else {
      window.localStorage.removeItem(key);
      window.dispatchEvent(new StorageEvent('storage', { key, newValue: null }));
    }
  } catch (error) {
    console.error(error);
  }
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [cachedValue, setCachedValue] = React.useState<T>(getValueFromStorage(key, defaultValue));

  const setValue: React.Dispatch<React.SetStateAction<T>> = React.useCallback(
    (newValueOrFn: T | ((prevState: T) => T)) => {
      const newValue =
        newValueOrFn instanceof Function
          ? newValueOrFn(getValueFromStorage(key, defaultValue))
          : newValueOrFn;
      setValueInStorage(key, newValue);
      if (typeof window === 'undefined') {
        // If we're in a server or test environment, the cache won't update automatically since there's no StorageEvent.
        setCachedValue(newValue);
      }
    },
    [key, defaultValue]
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const onStorageUpdated = (event: StorageEvent) => {
      if (event.key === key) {
        setCachedValue(event.newValue ? JSON.parse(event.newValue) : defaultValue);
      }
    };
    window.addEventListener('storage', onStorageUpdated);
    return () => {
      window.removeEventListener('storage', onStorageUpdated);
    };
  }, [key, defaultValue]);

  return [cachedValue, setValue];
};
