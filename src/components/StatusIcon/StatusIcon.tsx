import * as React from 'react';
import { Flex, FlexItem, Spinner, spinnerSize } from '@patternfly/react-core';
import {
  CheckCircleIcon,
  WarningTriangleIcon,
  ExclamationCircleIcon,
  InfoCircleIcon,
} from '@patternfly/react-icons';
import {
  global_disabled_color_200 as disabledColor,
  global_success_color_100 as successColor,
  global_warning_color_100 as warningColor,
  global_danger_color_100 as dangerColor,
  global_info_color_100 as infoColor,
} from '@patternfly/react-tokens';

export enum StatusType {
  Ok = 'Ok',
  Warning = 'Warning',
  Error = 'Error',
  Info = 'Info',
  Loading = 'Loading',
}

export interface IStatusIconProps {
  status: StatusType;
  label?: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  size?: spinnerSize;
}

export const StatusIcon: React.FunctionComponent<IStatusIconProps> = ({
  status,
  label,
  isDisabled = false,
  className = '',
  size = spinnerSize.sm,
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
  if (status === StatusType.Info) {
    icon = (
      <InfoCircleIcon
        className={className}
        color={isDisabled ? disabledColor.value : infoColor.value}
      />
    );
  }
  if (status === StatusType.Loading) {
    return (
      <Flex
        spaceItems={{ default: 'spaceItemsSm' }}
        alignItems={{ default: 'alignItemsFlexEnd' }}
        flexWrap={{ default: 'nowrap' }}
        style={{ whiteSpace: 'nowrap' }}
        className={className}
      >
        <FlexItem>
          <Spinner className={className} size={size} />;
        </FlexItem>
        <FlexItem>{label ? label : null}</FlexItem>
      </Flex>
    );
  }
  if (label) {
    return (
      <Flex
        spaceItems={{ default: 'spaceItemsSm' }}
        alignItems={{ default: 'alignItemsCenter' }}
        flexWrap={{ default: 'nowrap' }}
        style={{ whiteSpace: 'nowrap' }}
        className={className}
      >
        <FlexItem>{icon}</FlexItem>
        <FlexItem>{label}</FlexItem>
      </Flex>
    );
  }
  return icon;
};
