import { FormGroupProps, TextAreaProps, TextInputProps } from '@patternfly/react-core';
import * as React from 'react';
import * as yup from 'yup';
import equal from 'fast-deep-equal';

type MaybeArraySchema<T> = [T] extends [Array<infer E>] ? yup.ArraySchema<E> : yup.Schema<T>;

export interface IFormField<T> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  isDirty: boolean;
  isTouched: boolean;
  setIsTouched: (isTouched: boolean) => void;
  reset: () => void;
  schema: MaybeArraySchema<T>;
}

export interface IValidatedFormField<T> extends IFormField<T> {
  error: yup.ValidationError | null;
  isValid: boolean;
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
  isValid: boolean;
  isTouched: boolean;
  reset: () => void;
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
  schema: MaybeArraySchema<T>,
  options: { initialTouched?: boolean } = {}
): IFormField<T> => {
  const [value, setValue] = React.useState<T>(initialValue);
  const [isTouched, setIsTouched] = React.useState(options.initialTouched || false);
  return {
    value,
    setValue,
    isDirty: !equal(value, initialValue),
    isTouched,
    setIsTouched,
    reset: () => {
      setValue(initialValue);
      setIsTouched(options.initialTouched || false);
    },
    schema,
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
  yupOptions: yup.ValidateOptions = {}
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
        {} as { [key in keyof TFieldValues]?: yup.Schema<TFieldValues[key]> }
      );
      const schema = yup.object().shape(schemaShape).defined();
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
      (newObj, error) => ({ ...newObj, [error.path]: error }),
      {} as ErrorsByField
    ) || ({} as ErrorsByField);

  const validatedFields: ValidatedFormFields<TFieldValues> = fieldKeys.reduce((newObj, key) => {
    const field = fields[key];
    const error = errorsByField ? errorsByField[key] : null;
    const validatedField: IValidatedFormField<TFieldValues[keyof TFieldValues]> = {
      ...field,
      error,
      isValid: !error || !field.isTouched,
    };
    return { ...newObj, [key]: validatedField };
  }, {} as ValidatedFormFields<TFieldValues>);

  return {
    fields: validatedFields,
    values,
    isDirty,
    isTouched,
    isValid: hasRunInitialValidation && !validationError,
    reset: () => fieldKeys.forEach((key) => fields[key].reset()),
  };
};

// PatternFly-specific rendering helpers for FormGroup and TextInput components:

export const getFormGroupProps = <T>(
  field: IValidatedFormField<T>
): Pick<FormGroupProps, 'validated' | 'helperTextInvalid'> => ({
  validated: field.isValid ? 'default' : 'error',
  helperTextInvalid: field.error?.message,
});

export const getTextFieldProps = (
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>
): Pick<TextInputProps | TextAreaProps, 'value' | 'onChange' | 'onBlur' | 'validated'> => ({
  value: field.value,
  onChange: field.setValue,
  onBlur: () => field.setIsTouched(true),
  validated: field.isValid ? 'default' : 'error',
});

export const getTextInputProps = (
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>
): Partial<TextInputProps> => getTextFieldProps(field) as Partial<TextInputProps>;

export const getTextAreaProps = (
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>
): Partial<TextAreaProps> => getTextFieldProps(field) as Partial<TextAreaProps>;
