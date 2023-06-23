import * as React from 'react';
import { Flex, FlexItem, Spinner, SpinnerProps } from '@patternfly/react-core';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  InfoCircleIcon,
  QuestionCircleIcon,
  PauseCircleIcon,
} from '@patternfly/react-icons';
import { SVGIconProps } from '@patternfly/react-icons/dist/esm/createIcon';
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

export type StatusType = 'Ok' | 'Warning' | 'Error' | 'Info' | 'Loading' | 'Paused' | 'Unknown';

type IconListType = {
  [key in StatusType]: {
    Icon: React.ComponentClass<SVGIconProps> | React.FunctionComponent<SpinnerProps>;
    color?: { name: string; value: string; var: string };
  };
};
const iconList: IconListType = {
  Ok: {
    Icon: CheckCircleIcon,
    color: successColor,
  },
  Warning: {
    Icon: ExclamationTriangleIcon,
    color: warningColor,
  },
  Error: {
    Icon: ExclamationCircleIcon,
    color: errorColor,
  },
  Info: {
    Icon: InfoCircleIcon,
    color: infoColor,
  },
  Loading: {
    Icon: Spinner,
    color: loadingColor,
  },
  Paused: {
    Icon: PauseCircleIcon,
  },
  Unknown: {
    Icon: QuestionCircleIcon,
    color: unknownColor,
  },
};

export interface IStatusIconCommonProps {
  label?: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
}
export type StatusIconConditionalProps =
  | {
      status?: StatusType;
      customIcon?: never;
      customColor?: never;
    }
  | {
      status?: never;
      customIcon: React.ComponentClass<SVGIconProps>;
      customColor?: string;
    };

export const StatusIcon: React.FunctionComponent<
  IStatusIconCommonProps & StatusIconConditionalProps
> = ({
  status,
  customColor,
  customIcon,
  label,
  isDisabled = false,
  className = '',
}: IStatusIconCommonProps & StatusIconConditionalProps) => {
  const Icon = status! && iconList[status].Icon;
  const CustomIcon = customIcon! && customIcon;

  const icon = status ? (
    <Icon
      color={isDisabled ? disabledColor.value : iconList[status].color?.value || '#151515'}
      className={status === 'Loading' ? `${className} status-icon-loading-spinner` : className}
    />
  ) : (
    <CustomIcon
      color={isDisabled ? disabledColor.value : customColor}
      className={status === 'Loading' ? `${className} status-icon-loading-spinner` : className}
    ></CustomIcon>
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
