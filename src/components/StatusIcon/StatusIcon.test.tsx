import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  global_disabled_color_200 as disabledColor,
  global_success_color_100 as successColor,
  global_warning_color_100 as warningColor,
  global_Color_dark_200 as unknownColor,
  global_danger_color_100 as dangerColor,
  global_info_color_100 as infoColor,
} from '@patternfly/react-tokens';
import { StatusIcon, IStatusIconProps } from './StatusIcon';

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
      checkText({ status: 'Ok', label: 'Ready' }, 'Ready');
    });
    it('should have correct color', () => {
      checkColor({ status: 'Ok' }, successColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: 'Ok', isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: 'Ok', className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Warning status', () => {
    it('should have label if present', () => {
      checkText({ status: 'Warning', label: 'Warning' }, 'Warning');
    });
    it('should have correct color', () => {
      checkColor({ status: 'Warning' }, warningColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: 'Warning', isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: 'Warning', className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Error status', () => {
    it('should have label if present', () => {
      checkText({ status: 'Error', label: 'Error' }, 'Error');
    });
    it('should have correct color', () => {
      checkColor({ status: 'Error' }, dangerColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: 'Error', isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: 'Error', className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Info status', () => {
    it('should have label if present', () => {
      checkText({ status: 'Info', label: 'Info' }, 'Info');
    });
    it('should have correct color', () => {
      checkColor({ status: 'Info' }, infoColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: 'Info', isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: 'Info', className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Loading status', () => {
    it('should have label if present', () => {
      checkText({ status: 'Loading', label: 'Loading' }, 'Loading');
    });
    it('should pass down a given className', () => {
      checkClass({ status: 'Loading', className: 'foo' }, 'foo', 'span');
    });
  });

  describe('Paused status', () => {
    it('should have label if present', () => {
      checkText({ status: 'Paused', label: 'Paused' }, 'Paused');
    });
    it('should have correct color', () => {
      checkColor({ status: 'Paused' }, '#151515');
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: 'Paused', isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: 'Paused', className: 'foo' }, 'foo', 'svg');
    });
  });

  describe('Unknown status', () => {
    it('should have label if present', () => {
      checkText({ status: 'Unknown', label: 'Unknown' }, 'Unknown');
    });
    it('should have correct color', () => {
      checkColor({ status: 'Unknown' }, unknownColor.value);
    });
    it('should have disabled color if disabled', () => {
      checkColor({ status: 'Unknown', isDisabled: true }, disabledColor.value);
    });
    it('should pass down a given className', () => {
      checkClass({ status: 'Unknown', className: 'foo' }, 'foo', 'svg');
    });
  });
});
