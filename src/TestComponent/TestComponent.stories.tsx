import React from 'react';
import TestComponent from './TestComponent';

export default {
  title: 'TestComponent',
};

export const Primary: React.FunctionComponent = () => <TestComponent theme="primary" />;

export const Secondary: React.FunctionComponent = () => <TestComponent theme="secondary" />;
