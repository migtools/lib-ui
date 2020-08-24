import * as React from 'react';
import './TestComponent.scss';

export interface TestComponentProps {
  theme: 'primary' | 'secondary';
}

const TestComponent: React.FunctionComponent<TestComponentProps> = ({ theme }) => (
  <div data-testid="test-component" className={`test-component test-component-${theme}`}>
    <h1 className="heading">Test component v4</h1>
  </div>
);

export default TestComponent;
