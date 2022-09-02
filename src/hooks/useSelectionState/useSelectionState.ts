import * as React from 'react';

export interface ISelectionStateArgs<T> {
  items: T[];
  initialSelected?: T[];
  isEqual?: (a: T, b: T) => boolean;
  isItemSelectable?: (item: T) => boolean;
  externalState?: [T[], React.Dispatch<React.SetStateAction<T[]>>];
}

export interface ISelectionState<T> {
  selectedItems: T[];
  isItemSelected: (item: T) => boolean;
  isItemSelectable: (item: T) => boolean;
  toggleItemSelected: (item: T, isSelecting?: boolean) => void;
  selectMultiple: (items: T[], isSelecting: boolean) => void;
  areAllSelected: boolean;
  selectAll: (isSelecting?: boolean) => void;
  setSelectedItems: (items: T[]) => void;
}

export const useSelectionState = <T>({
  items,
  initialSelected = [],
  isEqual = (a, b) => a === b,
  isItemSelectable = () => true,
  externalState,
}: ISelectionStateArgs<T>): ISelectionState<T> => {
  const internalState = React.useState<T[]>(initialSelected);
  const [selectedItems, setSelectedItems] = externalState || internalState;

  const selectableItems = React.useMemo(() => items.filter(isItemSelectable), [
    items,
    isItemSelectable,
  ]);

  const isItemSelected = React.useCallback(
    (item: T) => selectedItems.some((i) => isEqual(item, i)),
    [isEqual, selectedItems]
  );

  const toggleItemSelected = (item: T, isSelecting = !isItemSelected(item)) => {
    if (isSelecting && isItemSelectable(item)) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((i) => !isEqual(i, item)));
    }
  };

  const selectMultiple = (itemsSubset: T[], isSelecting: boolean) => {
    const otherSelectedItems = selectedItems.filter(
      (selected) => !itemsSubset.some((item) => isEqual(selected, item))
    );
    const itemsToSelect = itemsSubset.filter(isItemSelectable);
    if (isSelecting) {
      setSelectedItems([...otherSelectedItems, ...itemsToSelect]);
    } else {
      setSelectedItems(otherSelectedItems);
    }
  };

  const selectAll = (isSelecting = true) => setSelectedItems(isSelecting ? selectableItems : []);
  const areAllSelected = selectedItems.length === selectableItems.length;

  // Preserve original order of items
  const selectedItemsInOrder = React.useMemo(() => {
    if (areAllSelected) {
      return selectableItems;
    } else if (selectedItems.length > 0) {
      return selectableItems.filter(isItemSelected);
    }
    return [];
  }, [areAllSelected, isItemSelected, selectableItems, selectedItems.length]);

  return {
    selectedItems: selectedItemsInOrder,
    isItemSelected,
    isItemSelectable,
    toggleItemSelected,
    selectMultiple,
    areAllSelected,
    selectAll,
    setSelectedItems,
  };
};
