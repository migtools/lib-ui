import * as React from 'react';
import * as yup from 'yup';
import {
  Button,
  Checkbox,
  TextContent,
  Text,
  TextInput,
  Modal,
  NumberInput,
  List,
  ListItem,
  Form,
  FormGroup,
} from '@patternfly/react-core';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { useLocalStorage } from './useStorage';
import { useFormState, useFormField } from '../useFormState';
import { ValidatedTextInput } from '../../components/ValidatedTextInput';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const PersistentCounterExample: React.FunctionComponent = () => {
  const [count, setCount] = useLocalStorage({ key: 'exampleCounter', defaultValue: 0 });
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
  const [value, setValue] = useLocalStorage({ key: 'exampleTextField', defaultValue: '' });
  return (
    <TextInput
      aria-label="Persistent text field example input"
      value={value}
      onChange={(_, value) => setValue(value)}
    />
  );
};

export const PersistentCheckboxExample: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useLocalStorage({
    key: 'exampleCheckboxChecked',
    defaultValue: false,
  });
  return (
    <Checkbox
      id="checkbox-example"
      label="I'm a persistent checkbox!"
      isChecked={isChecked}
      onChange={(_, value) => setIsChecked(value)}
    />
  );
};

export const WelcomeModalExample: React.FunctionComponent = () => {
  const ExamplePage: React.FunctionComponent = () => {
    const [isModalDisabled, setIsModalDisabled] = useLocalStorage({
      key: 'welcomeModalDisabled',
      defaultValue: false,
    });
    const [isModalOpen, setIsModalOpen] = React.useState(!isModalDisabled);
    return (
      <>
        <TextContent>
          <Text component="h4">Example Page Title</Text>
          <Text component="p">You reached the example page!</Text>
          <Text component="p">
            If you checked the &quot;don&apos;t show this again&quot; box, try reloading the page
            and returning here and you&apos;ll see the welcome modal won&apos;t come back. If you
            want to see it again, clear your browsing data or try an incognito tab, or use the
            &quot;Clear localStorage for all examples&quot; button below.
          </Text>
          <Button variant="secondary" onClick={() => setIsExamplePageOpen(false)}>
            Go back
          </Button>
        </TextContent>
        <Modal
          variant="small"
          isOpen={isModalOpen}
          title="Welcome to Example Page!"
          onClose={() => setIsModalOpen(false)}
          actions={[
            <Button key="confirm" variant="primary" onClick={() => setIsModalOpen(false)}>
              Get started
            </Button>,
          ]}
        >
          <TextContent className={spacing.mbMd}>
            <Text component="p">
              This is an introductory message that you will see each time you visit the example
              page, unless you check the box below! Tell your users what this page is all about, but
              let them choose not to be annoyed with it every time.
            </Text>
          </TextContent>
          <Checkbox
            label="Don't show this again"
            id="show-again-checkbox"
            isChecked={isModalDisabled}
            onChange={(_, value) => setIsModalDisabled(value)}
          />
        </Modal>
      </>
    );
  };

  // The following is just for the embedded example to work. In a real app you'd just follow the above ExamplePage.
  const [isExamplePageOpen, setIsExamplePageOpen] = React.useState(false);
  if (!isExamplePageOpen) {
    return (
      <Button variant="primary" onClick={() => setIsExamplePageOpen(true)}>
        Navigate to example page
      </Button>
    );
  }
  return <ExamplePage />;
};

export const ReusedKeyExample: React.FunctionComponent = () => {
  // In a real app each of these components would be in separate files.
  const ComponentA: React.FunctionComponent = () => {
    const [value, setValue] = useLocalStorage({
      key: 'exampleReusedKey',
      defaultValue: 'default value here',
    });
    return (
      <div className={spacing.mbLg}>
        <TextContent className={spacing.mbSm}>
          <Text component="h4">Component A</Text>
        </TextContent>
        <TextInput
          aria-label="Component A example text input"
          value={value}
          onChange={(_, value) => setValue(value)}
        />
      </div>
    );
  };
  const ComponentB: React.FunctionComponent = () => {
    const [value] = useLocalStorage({
      key: 'exampleReusedKey',
      defaultValue: 'default value here',
    });
    return (
      <div className={spacing.mbLg}>
        <TextContent className={spacing.mbSm}>
          <Text component="h4">Component B</Text>
          <Text component="p">{value}</Text>
        </TextContent>
      </div>
    );
  };
  return (
    <>
      <ComponentA />
      <ComponentA />
      <ComponentB />
    </>
  );
};

export const CustomHookExample: React.FunctionComponent = () => {
  // This could be exported from its own file and imported in multiple component files.
  const useMyStoredValue = () =>
    useLocalStorage({ key: 'myStoredValue', defaultValue: 'default defined once' });

  // In a real app each of these components would be in separate files.
  const ComponentA: React.FunctionComponent = () => {
    const [value, setValue] = useMyStoredValue();
    return (
      <div className={spacing.mbLg}>
        <TextContent className={spacing.mbSm}>
          <Text component="h4">Component A</Text>
        </TextContent>
        <TextInput
          aria-label="Component A example text input"
          value={value}
          onChange={(_, value) => setValue(value)}
        />
      </div>
    );
  };
  const ComponentB: React.FunctionComponent = () => {
    const [value] = useMyStoredValue();
    return (
      <div className={spacing.mbLg}>
        <TextContent className={spacing.mbSm}>
          <Text component="h4">Component B</Text>
          <Text component="p">{value}</Text>
        </TextContent>
      </div>
    );
  };
  return (
    <>
      <ComponentA />
      <ComponentA />
      <ComponentB />
    </>
  );
};

export const ComplexValueExample: React.FunctionComponent = () => {
  type Item = { name: string; description?: string };
  const [items, setItems] = useLocalStorage<Item[]>({ key: 'exampleArray', defaultValue: [] });

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
            isDisabled={!addForm.isValid}
          >
            Add
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export const ClearAllExamplesButton: React.FunctionComponent = () => (
  <div className={spacing.myXl}>
    <Button
      variant="secondary"
      isInline
      onClick={() => {
        const allKeys = [
          'exampleCounter',
          'exampleTextField',
          'exampleCheckboxChecked',
          'welcomeModalDisabled',
          'exampleReusedKey',
          'myStoredValue',
          'exampleArray',
        ];
        allKeys.forEach((key) => {
          window.localStorage.removeItem(key);
          window.dispatchEvent(new StorageEvent('storage', { key, newValue: null }));
        });
      }}
    >
      Clear localStorage for all examples
    </Button>
  </div>
);
