import React from 'react';
import { render } from '@testing-library/react';
import {
  global_disabled_color_200 as disabledColor,
  global_success_color_100 as successColor,
  global_warning_color_100 as warningColor,
  global_danger_color_100 as dangerColor,
} from '@patternfly/react-tokens';

import { StatusIcon, StatusType, IStatusIconProps } from './StatusIcon';

const checkColor = (props: IStatusIconProps, color: string) => {
  const { container } = render(<StatusIcon {...props} />);
  const icon = container.querySelector('svg');
  expect(icon).toHaveAttribute('fill', color);
};

const checkClass = (props: IStatusIconProps, className: string) => {
  const { container } = render(<StatusIcon {...props} />);
  const icon = container.querySelector('svg');
  expect(icon).toHaveClass(className);
};

describe('StatusIcon', () => {
  describe('Ok status', () => {
    it('should have correct color', () => {
      checkColor({ status: StatusType.Ok }, successColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: StatusType.Ok, isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Ok, className: 'foo' }, 'foo');
    });
  });

  describe('Warning status', () => {
    it('should have correct color', () => {
      checkColor({ status: StatusType.Warning }, warningColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: StatusType.Warning, isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Warning, className: 'foo' }, 'foo');
    });
  });

  describe('Error status', () => {
    it('should have correct color', () => {
      checkColor({ status: StatusType.Error }, dangerColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: StatusType.Error, isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Error, className: 'foo' }, 'foo');
    });
  });
});
