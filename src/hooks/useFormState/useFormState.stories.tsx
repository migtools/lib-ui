import * as React from 'react';
import * as yup from 'yup';
import { Form, FormGroup, TextInput, TextArea, Flex, Button } from '@patternfly/react-core';

import {
  useFormState,
  useFormField,
  getFormGroupProps,
  getTextInputProps,
  getTextAreaProps,
} from '../..';

export const BasicTextFields: React.FunctionComponent = () => {
  const form = useFormState({
    name: useFormField('', yup.string().label('Name').min(4).max(64).required()),
    description: useFormField('', yup.string().label('Description').max(128)),
  });

  return (
    <>
      <div>
        <label htmlFor="example-1-name">Name:</label>
        <br />
        <input
          id="example-1-name"
          type="text"
          value={form.fields.name.value}
          onChange={(event) => form.fields.name.setValue(event.target.value)}
          onBlur={() => form.fields.name.setIsTouched(true)}
        />
        {!form.fields.name.isValid ? (
          <p style={{ color: 'red' }}>{form.fields.name.error.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="example-1-desc">Description:</label>
        <br />
        <textarea
          id="example-1-desc"
          value={form.fields.description.value}
          onChange={(event) => form.fields.description.setValue(event.target.value)}
          onBlur={() => form.fields.description.setIsTouched(true)}
        />
        {!form.fields.description.isValid ? (
          <p style={{ color: 'red' }}>{form.fields.description.error.message}</p>
        ) : null}
      </div>
      <button
        disabled={!form.isTouched && !form.isValid}
        onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
      >
        Submit
      </button>
    </>
  );
};

export const PatternFlyTextFields: React.FunctionComponent = () => {
  const form = useFormState({
    name: useFormField('', yup.string().label('Name').min(4).max(64).required()),
    description: useFormField('', yup.string().label('Description').max(128)),
  });

  return (
    <Form>
      <FormGroup
        label="Name"
        isRequired
        fieldId="example-2-name"
        validated={form.fields.name.isValid ? 'default' : 'error'}
        helperTextInvalid={form.fields.name.error?.message}
      >
        <TextInput
          id="example-2-name"
          type="text"
          value={form.fields.name.value}
          onChange={form.fields.name.setValue}
          onBlur={() => form.fields.name.setIsTouched(true)}
          validated={form.fields.name.isValid ? 'default' : 'error'}
        />
      </FormGroup>
      <FormGroup
        label="Description"
        fieldId="example-2-desc"
        validated={form.fields.description.isValid ? 'default' : 'error'}
        helperTextInvalid={form.fields.description.error?.message}
      >
        <TextArea
          id="example-2-desc"
          value={form.fields.description.value}
          onChange={form.fields.description.setValue}
          onBlur={() => form.fields.description.setIsTouched(true)}
          validated={form.fields.description.isValid ? 'default' : 'error'}
        />
      </FormGroup>
      <Flex>
        <Button
          variant="primary"
          isDisabled={!form.isTouched && !form.isValid}
          onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
        >
          Submit
        </Button>
      </Flex>
    </Form>
  );
};

export const PatternFlyTextFieldsWithHelpers: React.FunctionComponent = () => {
  const form = useFormState({
    name: useFormField('', yup.string().label('Name').min(4).max(64).required()),
    description: useFormField('', yup.string().label('Description').max(128)),
  });

  return (
    <Form>
      <FormGroup
        label="Name"
        isRequired
        fieldId="example-3-name"
        {...getFormGroupProps(form.fields.name)}
      >
        <TextInput id="example-3-name" type="text" {...getTextInputProps(form.fields.name)} />
      </FormGroup>
      <FormGroup
        label="Description"
        fieldId="example-3-desc"
        {...getFormGroupProps(form.fields.description)}
      >
        <TextArea id="example-3-desc" {...getTextAreaProps(form.fields.description)} ref={null} />
      </FormGroup>
      <Flex>
        <Button
          variant="primary"
          isDisabled={!form.isTouched && !form.isValid}
          onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
        >
          Submit
        </Button>
      </Flex>
    </Form>
  );
};
