import * as React from 'react';
import * as yup from 'yup';
import { Form, TextArea, Flex, Button } from '@patternfly/react-core';

import { useFormState, useFormField } from '../..';
import { ValidatedTextInput } from './ValidatedTextInput';

export const PatternFlyTextFields: React.FunctionComponent = () => {
  const form = useFormState({
    name: useFormField('', yup.string().label('Name').min(4).max(64).required()),
    description: useFormField('', yup.string().label('Description').max(128)),
  });

  return (
    <Form>
      <ValidatedTextInput field={form.fields.name} fieldId="name" label="Name" isRequired />
      <ValidatedTextInput
        component={TextArea}
        field={form.fields.description}
        fieldId="desc"
        label="Description"
      />
      <Flex>
        <Button
          variant="primary"
          isDisabled={!form.isValid}
          onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
        >
          Submit
        </Button>
      </Flex>
    </Form>
  );
};
