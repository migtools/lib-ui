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
      icon: typeof CheckCircleIcon;
      color: typeof successColor;
    }
  | {
      icon: typeof ExclamationTriangleIcon;
      color: typeof warningColor;
    }
  | {
      icon: typeof ExclamationCircleIcon;
      color: typeof errorColor;
    }
  | {
      icon: typeof InfoCircleIcon;
      color: typeof infoColor;
    }
  | {
      icon: typeof Spinner;
      color: typeof loadingColor;
    }
  | {
      icon: typeof QuestionCircleIcon;
      color: typeof unknownColor;
    };

type iconListType = { [key in StatusIconType]: IconType };

const iconList: iconListType = {
  [StatusType.Ok]: {
    icon: CheckCircleIcon,
    color: successColor,
  },
  [StatusType.Warning]: {
    icon: ExclamationCircleIcon,
    color: warningColor,
  },
  [StatusType.Error]: {
    icon: ExclamationCircleIcon,
    color: errorColor,
  },
  [StatusType.Info]: {
    icon: InfoCircleIcon,
    color: infoColor,
  },
  [StatusType.Loading]: {
    icon: Spinner,
    color: loadingColor,
  },
  [StatusType.Unknown]: {
    icon: QuestionCircleIcon,
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
  const Icon = iconList[status].icon;

  return label ? (
    <Flex
      spaceItems={{ default: 'spaceItemsSm' }}
      alignItems={{ default: 'alignItemsCenter' }}
      flexWrap={{ default: 'nowrap' }}
      style={{ whiteSpace: 'nowrap' }}
      className={className}
    >
      <FlexItem>
        <Icon
          color={isDisabled ? disabledColor.value : iconList[status].color.value}
          className={
            status === StatusType.Loading ? `${className} status-icon-loading-spinner` : className
          }
        />
      </FlexItem>
      <FlexItem>{label}</FlexItem>
    </Flex>
  ) : null;
};
