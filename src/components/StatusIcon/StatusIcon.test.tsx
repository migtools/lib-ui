import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  global_disabled_color_200 as disabledColor,
  global_success_color_100 as successColor,
  global_warning_color_100 as warning100Color,
  global_warning_color_200 as warning200Color,
  global_danger_color_100 as dangerColor,
  global_info_color_100 as infoColor,
} from '@patternfly/react-tokens';
import { StatusIcon, StatusType, IStatusIconProps } from './StatusIcon';

const checkColor = (props: IStatusIconProps, color: string) => {
  const { container } = render(<StatusIcon {...props} />);
  const icon = container.querySelector('svg');
  expect(icon).toHaveAttribute('fill', color);
};

const checkClass = (props: IStatusIconProps, className: string, selector: string) => {
  const { container } = render(<StatusIcon {...props} />);
  const icon = container.querySelector(selector);
  expect(icon).toHaveClass(className);
};

const checkText = (props: IStatusIconProps, text: string) => {
  const { container } = render(<StatusIcon {...props} />);
  const icon = container.querySelector('.pf-l-flex');
  expect(icon).toContainHTML(text);
};

describe('StatusIcon', () => {
  describe('Ok status', () => {
    it('should have label if present', () => {
      checkText({ status: StatusType.Ok, label: 'Ready' }, 'Ready');
    });
    it('should have correct color', () => {
      checkColor({ status: StatusType.Ok }, successColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: StatusType.Ok, isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Ok, className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Warning status', () => {
    it('should have label if present', () => {
      checkText({ status: StatusType.Warning, label: 'Warning' }, 'Warning');
    });
    it('should have correct color', () => {
      checkColor({ status: StatusType.Warning }, warning100Color.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: StatusType.Warning, isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Warning, className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Error status', () => {
    it('should have label if present', () => {
      checkText({ status: StatusType.Error, label: 'Error' }, 'Error');
    });
    it('should have correct color', () => {
      checkColor({ status: StatusType.Error }, dangerColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: StatusType.Error, isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Error, className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Info status', () => {
    it('should have label if present', () => {
      checkText({ status: StatusType.Info, label: 'Info' }, 'Info');
    });
    it('should have correct color', () => {
      checkColor({ status: StatusType.Info }, infoColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: StatusType.Info, isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Info, className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Loading status', () => {
    it('should have label if present', () => {
      checkText({ status: StatusType.Loading, label: 'Loading' }, 'Loading');
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Loading, className: 'foo' }, 'foo', 'span');
    });
  });

  describe('Unknown status', () => {
    it('should have label if present', () => {
      checkText({ status: StatusType.Unknown, label: 'Unknown' }, 'Unknown');
    });
    it('should have correct color', () => {
      checkColor({ status: StatusType.Unknown }, warning200Color.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: StatusType.Unknown, isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: StatusType.Unknown, className: 'foo' }, 'foo', 'svg');
    });
  });
});
