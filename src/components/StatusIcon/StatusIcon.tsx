import * as React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';
import {
  CheckCircleIcon,
  WarningTriangleIcon,
  ExclamationCircleIcon,
} from '@patternfly/react-icons';
import {
  global_disabled_color_200 as disabledColor,
  global_success_color_100 as successColor,
  global_warning_color_100 as warningColor,
  global_danger_color_100 as dangerColor,
} from '@patternfly/react-tokens';

export enum StatusType {
  Ok = 'Ok',
  Warning = 'Warning',
  Error = 'Error',
}

export interface IStatusIconProps {
  status: StatusType;
  label?: string;
  isDisabled?: boolean;
  className?: string;
}

export const StatusIcon: React.FunctionComponent<IStatusIconProps> = ({
  status,
  label,
  isDisabled = false,
  className = '',
}: IStatusIconProps) => {
  let icon: React.ReactElement | null = null;
  if (status === StatusType.Ok) {
    icon = (
      <CheckCircleIcon
        className={className}
        color={isDisabled ? disabledColor.value : successColor.value}
      />
    );
  }
  if (status === StatusType.Warning) {
    icon = (
      <WarningTriangleIcon
        className={className}
        color={isDisabled ? disabledColor.value : warningColor.value}
      />
    );
  }
  if (status === StatusType.Error) {
    icon = (
      <ExclamationCircleIcon
        className={className}
        color={isDisabled ? disabledColor.value : dangerColor.value}
      />
    );
  }
  if (label) {
    return (
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>{icon}</FlexItem>
        <FlexItem>{label}</FlexItem>
      </Flex>
    );
  }
  return icon;
};
