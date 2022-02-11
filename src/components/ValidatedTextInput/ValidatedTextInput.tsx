import * as React from 'react';
import {
  FormGroup,
  FormGroupProps,
  TextArea,
  TextAreaProps,
  TextInput,
  TextInputProps,
} from '@patternfly/react-core';
import {
  IValidatedFormField,
  getFormGroupProps,
  getTextAreaProps,
  getTextInputProps,
} from '../../hooks/useFormState';

interface IValidatedTextInputProps
  extends Pick<FormGroupProps, 'label' | 'fieldId' | 'isRequired'>,
    Pick<TextInputProps, 'type'> {
  /** A field returned from useFormField() or useFormState().fields. */
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>;
  /** Either a TextInput or TextArea from @patternfly/react-core. Defaults to TextInput */
  component?: typeof TextInput | typeof TextArea;
  /** Whether to show the green 'valid' style when the field has been validated. Defaults to false ('default' style) */
  greenWhenValid?: boolean;
  /** Any extra props for the PatternFly FormGroup */
  formGroupProps?: Partial<FormGroupProps>;
  /** Any extra props for the PatternFly TextInput or TextArea */
  inputProps?: Partial<TextInputProps> | Partial<TextAreaProps>;
}

export const ValidatedTextInput: React.FunctionComponent<IValidatedTextInputProps> = ({
  field,
  component = TextInput,
  label = field.schema.describe().label,
  fieldId,
  isRequired,
  type = 'text',
  greenWhenValid = false,
  formGroupProps = {},
  inputProps = {},
}: IValidatedTextInputProps) => (
  <FormGroup
    label={label}
    isRequired={isRequired}
    fieldId={fieldId}
    {...getFormGroupProps(field as IValidatedFormField<string | undefined>, greenWhenValid)}
    {...formGroupProps}
  >
    {component === TextInput ? (
      <TextInput
        id={fieldId}
        type={type}
        {...getTextInputProps(field, greenWhenValid)}
        {...(inputProps as Partial<TextInputProps>)}
      />
    ) : (
      <TextArea
        id={fieldId}
        {...getTextAreaProps(field, greenWhenValid)}
        {...(inputProps as Partial<TextAreaProps>)}
        ref={null} // Necessary because of some weird TS issue with spreading Partial<TextAreaProps>['ref']
      />
    )}
  </FormGroup>
);
