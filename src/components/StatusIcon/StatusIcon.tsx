import * as React from 'react';
import { Flex, FlexItem, Spinner } from '@patternfly/react-core';
import {
  CheckCircleIcon,
  WarningTriangleIcon,
  ExclamationCircleIcon,
  InfoCircleIcon,
  UnknownIcon,
} from '@patternfly/react-icons';
import {
  global_disabled_color_200 as disabledColor,
  global_success_color_100 as successColor,
  global_warning_color_100 as warningColor,
  global_danger_color_100 as dangerColor,
  global_info_color_100 as infoColor,
} from '@patternfly/react-tokens';

import './StatusIcon.css';

export enum StatusType {
  Ok = 'Ok',
  Warning = 'Warning',
  Error = 'Error',
  Info = 'Info',
  Loading = 'Loading',
  Unknown = 'Unknown',
}

export interface IStatusIconProps {
  status: StatusType;
  label?: React.ReactNode;
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
  if (status === StatusType.Info) {
    icon = (
      <InfoCircleIcon
        className={className}
        color={isDisabled ? disabledColor.value : infoColor.value}
      />
    );
  }
  if (status === StatusType.Loading) {
    icon = <Spinner className={`${className} status-icon-loading-spinner`} />;
  }
  if (status === StatusType.Unknown) {
    icon = (
      <UnknownIcon
        className={className}
        color={isDisabled ? disabledColor.value : warningColor.value}
      />
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
