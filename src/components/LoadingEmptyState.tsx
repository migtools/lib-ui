import {
  Bullseye,
  EmptyState,
  EmptyStateBody,
  Spinner,
  SpinnerProps,
  Title,
} from '@patternfly/react-core';
import * as React from 'react';

interface ILoadingEmptyStateProps {
  className?: string;
  spinnerProps?: Partial<SpinnerProps>;
  body?: React.ReactNode;
}

const LoadingEmptyState: React.FunctionComponent<ILoadingEmptyStateProps> = ({
  className = '',
  spinnerProps = {},
  body = null,
}: ILoadingEmptyStateProps) => (
  <Bullseye className={className}>
    <EmptyState variant="lg">
      <div className="pf-c-empty-state__icon">
        <Spinner aria-labelledby="loadingPrefLabel" size="xl" {...spinnerProps} />
      </div>
      <Title id="loadingPrefLabel" headingLevel="h2">
        Loading...
      </Title>
      {body ? <EmptyStateBody>{body}</EmptyStateBody> : null}
    </EmptyState>
  </Bullseye>
);

export default LoadingEmptyState;
