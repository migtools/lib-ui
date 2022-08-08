import * as React from 'react';
import { Button, Checkbox, TextContent, Text, TextInput, Modal } from '@patternfly/react-core';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { useLocalStorage } from './useLocalStorage';

export const PersistentTextFieldExample: React.FunctionComponent = () => {
  const [value, setValue] = useLocalStorage('exampleTextFieldValue');
  return <TextInput id="text-field-example" value={value || ''} onChange={setValue} />;
};

export const PersistentCheckboxExample: React.FunctionComponent = () => {
  const [isCheckedStr, setIsCheckedStr] = useLocalStorage('exampleCheckboxChecked');
  return (
    <Checkbox
      id="checkbox-example"
      label="This checkbox will persist across multiple tabs and page reloads!"
      isChecked={isCheckedStr === 'true'}
      onChange={(checked) => setIsCheckedStr(checked ? 'true' : 'false')}
    />
  );
};

export const WelcomeModalExample: React.FunctionComponent = () => {
  const ExamplePage: React.FunctionComponent = () => {
    const [isModalDisabledStr, setIsModalDisabledStr] = useLocalStorage('welcomeModalDisabled');
    const [isWelcomeModalOpen, setIsModalOpen] = React.useState(isModalDisabledStr !== 'true');

    return (
      <>
        <TextContent>
          <Text component="h4">Some Page Title</Text>
          <Text component="p">You reached the example page!</Text>
          <Text component="p">
            If you checked the &quot;don&apos;t show this again&quot; box, try reloading the page
            and you&apos;ll see the welcome modal won&apos;t come back. If you want to see it again,
            clear your browsing data or try an incognito tab.
          </Text>
          <Button onClick={() => setIsExamplePageOpen(false)}>Go back</Button>
        </TextContent>
        <Modal
          isOpen={isWelcomeModalOpen}
          title="Welcome to the example!"
          onClose={() => setIsModalOpen(false)}
        >
          <TextContent>
            <Text component="p">
              This is an introductory message that you will see each time you visit the example
              page, unless you check the box below!
            </Text>
          </TextContent>
          <Checkbox
            className={spacing.mtMd}
            label="Don't show this again"
            id="show-again-checkbox"
            isChecked={isModalDisabledStr === 'true'}
            onChange={(checked: boolean) => {
              setIsModalDisabledStr(checked ? 'true' : 'false');
            }}
          />
        </Modal>
      </>
    );
  };

  // The following is just for the embedded example to work. In a real app you'd just follow the above ExamplePage.
  const [isExamplePageOpen, setIsExamplePageOpen] = React.useState(false);
  if (!isExamplePageOpen) {
    return (
      <>
        <TextContent>
          <Text component="p">This button will take you to a page that has a welcome modal!</Text>
        </TextContent>
        <Button variant="primary" onClick={() => setIsExamplePageOpen(true)}>
          Navigate to example page
        </Button>
      </>
    );
  }
  return <ExamplePage />;
};
