import { FormGroupProps, TextAreaProps, TextInputProps } from '@patternfly/react-core';
import * as React from 'react';
import * as yup from 'yup';
import equal from 'fast-deep-equal';
import { ValidateOptions } from 'yup/lib/types';

export interface IFormField<T> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  defaultValue: T;
  cleanValue: T;
  reinitialize: (value: T) => void; // Sets defaultValue, cleanValue and current value. Value will be restored on revert or clear. Useful if initial values are loaded asynchronously.
  prefill: (value: T) => void; // Sets cleanValue and current value. Value will be restored on revert but not clear. Useful if values to be edited are loaded asynchronously but retains separate defaultValue for clear.
  markSaved: () => void; // Sets cleanValue to current value. Current value will be restored on revert but not clear. Useful if values have been saved to storage but the form is still open.
  clear: () => void; // Sets current value to defaultValue.
  revert: () => void; // Sets current value to cleanValue.
  isDirty: boolean; // True if current value is different from cleanValue.
  isTouched: boolean;
  setIsTouched: (isTouched: boolean) => void;
  schema: yup.AnySchema<T>;
}

export interface IValidatedFormField<T> extends IFormField<T> {
  error: yup.ValidationError | null;
  isValid: boolean;
  shouldShowError: boolean; // True if field has validation errors and has been touched (false if it's just blank and untouched)
}

// The generic TFieldValues type variable is an interface of field value types (the T in IFormField<T>) by field key.
// It is the generic type variable passed to useFormField. More detail below.

type FormFields<TFieldValues> = {
  [key in keyof TFieldValues]: IFormField<TFieldValues[key]>;
};

type ValidatedFormFields<TFieldValues> = {
  [key in keyof TFieldValues]: IValidatedFormField<TFieldValues[key]>;
};

export interface IFormState<TFieldValues> {
  fields: ValidatedFormFields<TFieldValues>;
  values: TFieldValues; // For convenience in submitting forms (values are also included in fields property)
  isDirty: boolean;
  isTouched: boolean;
  isValid: boolean;
  setValues: (newValues: Partial<TFieldValues>) => void; // Sets multiple values at once.
  reinitialize: (newValues: Partial<TFieldValues>) => void; // Reinitializes multiple values at once (see IFormField<T>)
  prefill: (newValues: Partial<TFieldValues>) => void; // Prefills multiple values at once (see IFormField<T>)
  markSaved: () => void; // Marks all fields as clean/saved (see IFormField<T>)
  clear: () => void; // Clears all fields (see IFormField<T>)
  revert: () => void; // Reverts all fields (see IFormField<T>)
}

// The generic T type variable is the type of the field's value (the T in IFormField<T>).
// It is optional, and can either be inferred from the type of the initialValue or explicitly passed.

// example (explicit):
//   useFormField<string>('', ...)
//     -> returns IFormField<string>
// example (implicit):
//   useFormField('', ...)
//     -> also returns IFormField<string>

export const useFormField = <T>(
  initialValue: T,
  schema: yup.AnySchema<T | undefined>,
  options: {
    initialTouched?: boolean; // Start field with isTouched set to true
    onChange?: (newValue: T) => void; // Called after any call to field.setValue, for side effects
  } = {}
): IFormField<T> => {
  const [defaultValue, setDefaultValue] = React.useState<T>(initialValue); // The value used on clear()
  const [cleanValue, setCleanValue] = React.useState<T>(initialValue); // The value considered "unchanged", determines isDirty and used on revert()
  const [value, baseSetValue] = React.useState<T>(initialValue); // The actual value in the field
  const [isTouched, setIsTouched] = React.useState(options.initialTouched || false);

  // Replicates the behavior of a real useState dispatch function in order to also call `options.onChange` if present
  const setValue: React.Dispatch<React.SetStateAction<T>> = (
    valueOrFn: T | ((prevValue: T) => T)
  ) => {
    baseSetValue(valueOrFn);
    if (options.onChange) {
      const newValue =
        typeof valueOrFn === 'function'
          ? (valueOrFn as (prevValue: T) => T)(value)
          : (valueOrFn as T);
      options.onChange(newValue);
    }
  };

  return {
    value,
    setValue,
    defaultValue,
    cleanValue,
    reinitialize: (value: T) => {
      setDefaultValue(value);
      setCleanValue(value);
      setValue(value);
    },
    prefill: (value: T) => {
      setCleanValue(value);
      setValue(value);
    },
    markSaved: () => {
      setCleanValue(value);
    },
    clear: () => {
      setValue(defaultValue);
      setIsTouched(options.initialTouched || false);
    },
    revert: () => {
      setValue(cleanValue);
      setIsTouched(options.initialTouched || false);
    },
    isDirty: !equal(value, cleanValue),
    isTouched,
    setIsTouched,
    schema: schema.defined(),
  };
};

// The generic TFieldValues type variable is an interface of field value types (the T in IFormField<T>) by field key.
// It is optional, and can either be inferred from the types in the `fields` argument or explicitly passed.

// example (explicit):
//   interface IFormValues { foo: string, bar: number }
//   useFormState<IFormValues>({ foo: useFormField<string>(...), bar: useFormField<number>(...) })
//     -> returns IFormState<IFormValues>

// example (implicit):
//   useFormState({ foo: useFormField<string>(...), bar: useFormField<number>(...) })
//     -> returns IFormState<{ foo: string, bar: bumber }>

export const useFormState = <TFieldValues>(
  fields: FormFields<TFieldValues>,
  yupOptions: ValidateOptions = {}
): IFormState<TFieldValues> => {
  const fieldKeys = Object.keys(fields) as (keyof TFieldValues)[];
  const values: TFieldValues = fieldKeys.reduce(
    (newObj, key) => ({ ...newObj, [key]: fields[key].value }),
    {} as TFieldValues
  );
  const isDirty = fieldKeys.some((key) => fields[key].isDirty);
  const isTouched = fieldKeys.some((key) => fields[key].isTouched);

  // Memoize the validation, only recompute if the field values changed
  const [validationError, setValidationError] = React.useState<yup.ValidationError | null>(null);
  const [hasRunInitialValidation, setHasRunInitialValidation] = React.useState(false);
  const lastValuesRef = React.useRef(values);
  React.useEffect(() => {
    if (!hasRunInitialValidation || !equal(lastValuesRef.current, values)) {
      lastValuesRef.current = values;
      const schemaShape = fieldKeys.reduce(
        (newObj, key) => ({ ...newObj, [key]: fields[key].schema }),
        {} as { [key in keyof TFieldValues]: yup.AnySchema<TFieldValues[key]> }
      );
      const schema = yup.object().shape(schemaShape);
      setHasRunInitialValidation(true);
      schema
        .validate(values, { abortEarly: false, ...yupOptions })
        .then(() => {
          if (lastValuesRef.current === values) {
            setValidationError(null);
          }
        })
        .catch((e) => {
          if (lastValuesRef.current === values) {
            setValidationError(e as yup.ValidationError);
          }
        });
    }
  }, [fieldKeys, fields, hasRunInitialValidation, validationError, values, yupOptions]);

  type ErrorsByField = { [key in keyof TFieldValues]: yup.ValidationError };
  const errorsByField =
    validationError?.inner.reduce(
      (newObj, error) => ({ ...newObj, [error.path || '']: error }),
      {} as ErrorsByField
    ) || ({} as ErrorsByField);

  type TFieldValue = TFieldValues[keyof TFieldValues];

  const validatedFields: ValidatedFormFields<TFieldValues> = fieldKeys.reduce((newObj, key) => {
    const field = fields[key];
    const error = errorsByField ? errorsByField[key] : null;
    const validatedField: IValidatedFormField<TFieldValue> = {
      ...field,
      error,
      isValid: !error,
      shouldShowError: !!error && field.isTouched,
    };
    return { ...newObj, [key]: validatedField };
  }, {} as ValidatedFormFields<TFieldValues>);

  return {
    fields: validatedFields,
    values,
    isDirty,
    isTouched,
    isValid: hasRunInitialValidation && !validationError,
    setValues: (newValues: Partial<TFieldValues>) =>
      (Object.keys(newValues) as (keyof TFieldValues)[]).forEach(
        (key) => fields[key] && fields[key].setValue(newValues[key] as TFieldValue)
      ),
    reinitialize: (newValues: Partial<TFieldValues>) =>
      (Object.keys(newValues) as (keyof TFieldValues)[]).forEach(
        (key) => fields[key] && fields[key].reinitialize(newValues[key] as TFieldValue)
      ),
    prefill: (newValues: Partial<TFieldValues>) =>
      (Object.keys(newValues) as (keyof TFieldValues)[]).forEach(
        (key) => fields[key] && fields[key].prefill(newValues[key] as TFieldValue)
      ),
    markSaved: () => fieldKeys.forEach((key) => fields[key].markSaved()),
    clear: () => fieldKeys.forEach((key) => fields[key].clear()),
    revert: () => fieldKeys.forEach((key) => fields[key].revert()),
  };
};

// PatternFly-specific rendering helpers for FormGroup and TextInput components:

export interface FormGroupOptions {
  greenWhenValid?: boolean;
}

export const getFormGroupProps = <T>(
  field: Pick<IValidatedFormField<T>, 'isTouched' | 'isValid' | 'error' | 'shouldShowError'>,
  options?: FormGroupOptions
): Pick<FormGroupProps, 'validated' | 'helperTextInvalid'> => {
  const validStyle: FormGroupProps['validated'] = options?.greenWhenValid ? 'success' : 'default';
  return {
    validated: field.shouldShowError ? 'error' : field.isValid ? validStyle : 'default',
    helperTextInvalid: field.error?.message,
  };
};

export interface TextFieldOptions {
  greenWhenValid?: boolean;
  onBlur?: () => void;
}

export const getTextFieldProps = (
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>,
  options?: TextFieldOptions
): Pick<TextInputProps | TextAreaProps, 'value' | 'onChange' | 'onBlur' | 'validated'> => ({
  value: field.value,
  onChange: field.setValue,
  onBlur: () => {
    field.setIsTouched(true);
    options?.onBlur?.();
  },
  validated: getFormGroupProps(field, options).validated,
});

export const getTextInputProps = (
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>,
  options?: TextFieldOptions
): Partial<TextInputProps> => getTextFieldProps(field, options) as Partial<TextInputProps>;

export const getTextAreaProps = (
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>,
  options?: TextFieldOptions
): Partial<TextAreaProps> => getTextFieldProps(field, options) as Partial<TextAreaProps>;
