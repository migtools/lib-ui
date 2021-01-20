import * as React from 'react';
import { Flex, FlexItem, Spinner } from '@patternfly/react-core';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  InfoCircleIcon,
  QuestionCircleIcon,
} from '@patternfly/react-icons';
import {
  global_disabled_color_200 as disabledColor,
  global_success_color_100 as successColor,
  global_warning_color_100 as warningColor,
  global_Color_dark_200 as unknownColor,
  global_danger_color_100 as errorColor,
  global_info_color_100 as infoColor,
  global_info_color_200 as loadingColor,
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

export type StatusIconType = keyof typeof StatusType;

type IconType =
  | {
      Icon: typeof CheckCircleIcon;
      color: typeof successColor;
    }
  | {
      Icon: typeof ExclamationTriangleIcon;
      color: typeof warningColor;
    }
  | {
      Icon: typeof ExclamationCircleIcon;
      color: typeof errorColor;
    }
  | {
      Icon: typeof InfoCircleIcon;
      color: typeof infoColor;
    }
  | {
      Icon: typeof Spinner;
      color: typeof loadingColor;
    }
  | {
      Icon: typeof QuestionCircleIcon;
      color: typeof unknownColor;
    };

type iconListType = { [key in StatusIconType]: IconType };

const iconList: iconListType = {
  [StatusType.Ok]: {
    Icon: CheckCircleIcon,
    color: successColor,
  },
  [StatusType.Warning]: {
    Icon: ExclamationCircleIcon,
    color: warningColor,
  },
  [StatusType.Error]: {
    Icon: ExclamationCircleIcon,
    color: errorColor,
  },
  [StatusType.Info]: {
    Icon: InfoCircleIcon,
    color: infoColor,
  },
  [StatusType.Loading]: {
    Icon: Spinner,
    color: loadingColor,
  },
  [StatusType.Unknown]: {
    Icon: QuestionCircleIcon,
    color: unknownColor,
  },
};

export interface IStatusIconProps {
  status: StatusIconType;
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
  const Icon = iconList[status].Icon;
  const icon = (
    <Icon
      color={isDisabled ? disabledColor.value : iconList[status].color.value}
      className={
        status === StatusType.Loading ? `${className} status-icon-loading-spinner` : className
      }
    />
  );

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
