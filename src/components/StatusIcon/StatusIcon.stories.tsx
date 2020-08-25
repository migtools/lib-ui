import * as React from 'react';
import { StatusIcon, StatusType } from './StatusIcon';

export default {
  title: 'Components/StatusIcon',
};

export const Ok: React.FunctionComponent = () => (
  <>
    <StatusIcon status={StatusType.Ok} /> Ready
  </>
);

export const Warning: React.FunctionComponent = () => (
  <>
    <StatusIcon status={StatusType.Warning} /> Warning
  </>
);

export const Error: React.FunctionComponent = () => (
  <>
    <StatusIcon status={StatusType.Error} /> Error
  </>
);
