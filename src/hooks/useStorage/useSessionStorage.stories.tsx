import * as React from 'react';
import * as yup from 'yup';
import {
  Button,
  TextContent,
  Text,
  TextInput,
  NumberInput,
  List,
  ListItem,
  Form,
  FormGroup,
} from '@patternfly/react-core';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { useSessionStorage } from './useStorage';
import { useFormState, useFormField } from '../useFormState';
import { ValidatedTextInput } from '../../components/ValidatedTextInput';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const PersistentCounterExample: React.FunctionComponent = () => {
  const [count, setCount] = useSessionStorage('exampleCounter', 0);
  return (
    <NumberInput
      value={count}
      onMinus={() => setCount(count - 1)}
      onPlus={() => setCount(count + 1)}
      onChange={(event) => setCount(Number(event.currentTarget.value))}
      inputName="input"
      inputAriaLabel="number input"
      minusBtnAriaLabel="minus"
      plusBtnAriaLabel="plus"
    />
  );
};

export const PersistentTextFieldExample: React.FunctionComponent = () => {
  const [value, setValue] = useSessionStorage('exampleTextField', '');
  return (
    <TextInput aria-label="Persistent text field example input" value={value} onChange={setValue} />
  );
};

export const ComplexValueExample: React.FunctionComponent = () => {
  type Item = { name: string; description?: string };
  const [items, setItems] = useSessionStorage<Item[]>('exampleArray', []);

  const addForm = useFormState({
    name: useFormField('', yup.string().required().label('Name')),
    description: useFormField('', yup.string().label('Description')),
  });

  return (
    <>
      <TextContent className={spacing.mbLg}>
        <Text component="h4">Saved items</Text>
        {items.length > 0 ? (
          <List>
            {items.map((item, index) => (
              <ListItem key={`${index}-${item.name}`}>
                Name: {item.name}
                {item.description ? <>, Description: {item.description}</> : null}
                <Button
                  variant="plain"
                  aria-label="Remove"
                  onClick={() =>
                    setItems((value) => {
                      const newArray = [...value];
                      newArray.splice(index, 1);
                      return newArray;
                    })
                  }
                >
                  <TimesIcon />
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Text component="p">No items yet</Text>
        )}
      </TextContent>
      <TextContent className={spacing.mbMd}>
        <Text component="h4">Add item:</Text>
      </TextContent>
      <Form isWidthLimited isHorizontal className={spacing.mbMd}>
        <ValidatedTextInput isRequired fieldId="name" field={addForm.fields.name} />
        <ValidatedTextInput fieldId="description" field={addForm.fields.description} />
        <FormGroup fieldId="submit">
          <Button
            id="submit"
            onClick={() => {
              const { name, description } = addForm.values;
              setItems((value) => [...value, { name, description }]);
              addForm.clear();
            }}
          >
            Add
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};
