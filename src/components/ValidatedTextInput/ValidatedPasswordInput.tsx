import * as React from 'react';
import {
  Button,
  FormGroup,
  FormGroupProps,
  InputGroup,
  TextInput,
  TextInputProps,
} from '@patternfly/react-core';
import { EyeIcon, EyeSlashIcon } from '@patternfly/react-icons';
import { IValidatedFormField, getFormGroupProps, getTextInputProps, TextFieldOptions } from '../..';

interface IValidatedPasswordInputProps
  extends Pick<FormGroupProps, 'label' | 'fieldId' | 'isRequired'> {
  /** A field returned from useFormField() or useFormState().fields. */
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>;
  /** Whether to show the green 'valid' style when the field has been validated. Defaults to false ('default' style) */
  greenWhenValid?: boolean;
  /** Extra callback to call onBlur in addition to setting the field isTouched in state */
  onBlur?: () => void;
  /** Extra callback to call onChange in addition to setting the field value in state */
  onChange?: (value: string) => void;
  /** Any extra props for the PatternFly FormGroup */
  formGroupProps?: Partial<FormGroupProps>;
  /** Any extra props for the PatternFly TextInput */
  inputProps?: Partial<TextInputProps>;
  showPasswordAriaLabel?: string;
  hidePasswordAriaLabel?: string;
}

export const ValidatedPasswordInput: React.FunctionComponent<IValidatedPasswordInputProps> = ({
  field,
  label = field.schema.describe().label,
  fieldId,
  isRequired,
  greenWhenValid = false,
  onBlur,
  onChange,
  formGroupProps = {},
  inputProps = {},
  showPasswordAriaLabel = `Show ${label}`,
  hidePasswordAriaLabel = `Hide ${label}`,
}: IValidatedPasswordInputProps) => {
  const [isValueVisible, toggleValueVisible] = React.useReducer((isVisible) => !isVisible, false);
  const options: TextFieldOptions = { greenWhenValid, onBlur, onChange };
  return (
    <FormGroup
      label={label}
      isRequired={isRequired}
      fieldId={fieldId}
      {...getFormGroupProps(field as IValidatedFormField<string | undefined>, options)}
      {...formGroupProps}
    >
      <InputGroup>
        <TextInput
          id={fieldId}
          type={isValueVisible ? 'text' : 'password'}
          {...getTextInputProps(field, options)}
          {...(inputProps as Partial<TextInputProps>)}
        />
        <Button
          variant="control"
          onClick={toggleValueVisible}
          aria-label={isValueVisible ? hidePasswordAriaLabel : showPasswordAriaLabel}
        >
          {!isValueVisible ? <EyeIcon /> : <EyeSlashIcon />}
        </Button>
      </InputGroup>
    </FormGroup>
  );
};
