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
  getTextAreaProps,
  getTextInputProps,
  TextFieldOptions,
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
  /** Extra callback to call onBlur in addition to setting the field isTouched in state */
  onBlur?: () => void;
  /** Extra callback to call onChange in addition to setting the field value in state */
  onChange?: (value: string) => void;
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
  onBlur,
  onChange,
  formGroupProps = {},
  inputProps = {},
}: IValidatedTextInputProps) => {
  const options: TextFieldOptions = { greenWhenValid, onBlur, onChange };
  return (
    <FormGroup label={label} isRequired={isRequired} fieldId={fieldId} {...formGroupProps}>
      {component === TextInput ? (
        <TextInput
          id={fieldId}
          type={type}
          {...getTextInputProps(field, options)}
          {...(inputProps as Partial<TextInputProps>)}
        />
      ) : (
        <TextArea
          id={fieldId}
          {...getTextAreaProps(field, options)}
          {...(inputProps as Partial<TextAreaProps>)}
          ref={null} // Necessary because of some weird TS issue with spreading Partial<TextAreaProps>['ref']
        />
      )}
    </FormGroup>
  );
};
