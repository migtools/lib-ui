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
import { IValidatedFormField, getFormGroupProps, getTextInputProps } from '../..';

interface IValidatedPasswordInputProps
  extends Pick<FormGroupProps, 'label' | 'fieldId' | 'isRequired'> {
  /** A field returned from useFormField() or useFormState().fields. */
  field: IValidatedFormField<string> | IValidatedFormField<string | undefined>;
  /** Any extra props for the PatternFly FormGroup */
  formGroupProps?: Partial<FormGroupProps>;
  /** Any extra props for the PatternFly TextInput */
  inputProps?: Partial<TextInputProps>;
  showPasswordAriaLabel?: string;
  hidePasswordAriaLabel?: string;
}

export const ValidatedPasswordInput: React.FunctionComponent<IValidatedPasswordInputProps> = ({
  field,
  label,
  fieldId,
  isRequired,
  formGroupProps = {},
  inputProps = {},
  showPasswordAriaLabel = `Show ${label}`,
  hidePasswordAriaLabel = `Hide ${label}`,
}: IValidatedPasswordInputProps) => {
  const [isValueVisible, toggleValueVisible] = React.useReducer((isVisible) => !isVisible, false);
  return (
    <FormGroup
      label={label}
      isRequired={isRequired}
      fieldId={fieldId}
      {...getFormGroupProps(field as IValidatedFormField<string | undefined>)}
      {...formGroupProps}
    >
      <InputGroup>
        <TextInput
          id={fieldId}
          type={isValueVisible ? 'text' : 'password'}
          {...getTextInputProps(field)}
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
