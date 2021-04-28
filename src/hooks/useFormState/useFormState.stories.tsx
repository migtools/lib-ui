import * as React from 'react';
import * as yup from 'yup';
import { Form, FormGroup, TextInput, TextArea, Flex, Button } from '@patternfly/react-core';

import {
  useFormState,
  useFormField,
  getFormGroupProps,
  getTextInputProps,
  getTextAreaProps,
  useSelectionState,
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
          <p style={{ color: 'red' }}>{form.fields.name.error?.message}</p>
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
          <p style={{ color: 'red' }}>{form.fields.description.error?.message}</p>
        ) : null}
      </div>
      <button
        disabled={!form.isDirty || !form.isValid}
        onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
      >
        Submit
      </button>
      <button disabled={!form.isDirty} onClick={form.reset} style={{ marginLeft: 5 }}>
        Reset
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
          isDisabled={!form.isDirty || !form.isValid}
          onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
        >
          Submit
        </Button>
        <Button variant="secondary" isDisabled={!form.isDirty} onClick={form.reset}>
          Reset
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
          isDisabled={!form.isDirty || !form.isValid}
          onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
        >
          Submit
        </Button>
        <Button variant="secondary" isDisabled={!form.isDirty} onClick={form.reset}>
          Reset
        </Button>
      </Flex>
    </Form>
  );
};

export const AsyncPrefilling: React.FunctionComponent = () => {
  const form = useFormState({
    name: useFormField('', yup.string().label('Name').min(4).max(64).required()),
    description: useFormField('', yup.string().label('Description').max(128)),
  });

  // Simulate a network request. You should use a better state handler like React Query or Redux for this.
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        const objectFromServer = { name: 'Existing name', description: 'Existing description' };
        form.fields.name.setInitialValue(objectFromServer.name);
        form.fields.description.setInitialValue(objectFromServer.description);
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading, form.fields.description, form.fields.name]);

  if (isLoading) return <h1>Loading...</h1>;

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
          isDisabled={!form.isDirty || !form.isValid}
          onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
        >
          Submit
        </Button>
        <Button variant="secondary" isDisabled={!form.isDirty} onClick={form.reset}>
          Reset
        </Button>
      </Flex>
    </Form>
  );
};

export const ComplexFieldTypes: React.FunctionComponent = () => {
  // GROCERY_STORES and GROCERY_ITEMS represent some data you might load from an API.
  interface IGroceryStore {
    name: string;
    isOpen: boolean;
  }
  const GROCERY_STORES: IGroceryStore[] = [
    { name: 'Market Basket', isOpen: true },
    { name: 'Wegmans', isOpen: false },
    { name: 'Aldi', isOpen: true },
  ];
  const GROCERY_ITEMS: string[] = ['Milk', 'Eggs', 'Flour', 'Butter'];

  const form = useFormState({
    store: useFormField<IGroceryStore | null>(
      null,
      yup
        .mixed<IGroceryStore | null>()
        .required()
        .test('is-open', 'The selected store is closed', (value) => !!value?.isOpen)
    ),
    items: useFormField<string[]>(
      [],
      yup.array(yup.string().default('')).required().max(2, 'Select no more than 2 items')
    ),
  });

  const { isItemSelected, toggleItemSelected } = useSelectionState<string>({
    items: GROCERY_ITEMS,
    externalState: [form.fields.items.value, form.fields.items.setValue],
  });

  return (
    <>
      <div>
        <label htmlFor="example-4-store">Store:</label>&nbsp;
        <select
          id="example-4-store"
          onChange={(event) => {
            form.fields.store.setValue(
              GROCERY_STORES.find((store) => store.name === event.target.value) || null
            );
            form.fields.store.setIsTouched(true);
          }}
          value={form.values.store?.name || ''}
        >
          <option value="" disabled>
            Select a store...
          </option>
          {GROCERY_STORES.map((store) => (
            <option key={store.name} value={store.name}>
              {store.name} - {store.isOpen ? 'Open' : 'Closed'}
            </option>
          ))}
        </select>
        {!form.fields.store.isValid ? (
          <p style={{ color: 'red' }}>{form.fields.store.error?.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="example-4-items">Items:</label>
        <br />
        {GROCERY_ITEMS.map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              id={`${item}-checkbox`}
              checked={isItemSelected(item)}
              onChange={() => {
                toggleItemSelected(item);
                form.fields.items.setIsTouched(true);
              }}
            />
            &nbsp;
            <label htmlFor={`${item}-checkbox`}>{item}</label>
          </div>
        ))}
        {!form.fields.items.isValid ? (
          <p style={{ color: 'red' }}>{form.fields.items.error?.message}</p>
        ) : null}
      </div>
      <button
        disabled={!form.isDirty || !form.isValid}
        onClick={() => alert(`Submit form! ${JSON.stringify(form.values)}`)}
      >
        Submit
      </button>
      <button disabled={!form.isDirty} onClick={form.reset} style={{ marginLeft: 5 }}>
        Reset
      </button>
    </>
  );
};
