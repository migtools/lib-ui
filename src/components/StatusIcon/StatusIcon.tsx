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
} from '@patternfly/react-tokens';

export type StatusType = 'Ok' | 'Warning' | 'Error' | 'Info' | 'Loading' | 'Paused' | 'Unknown';

type IconListType = Partial<
  Record<
    StatusType,
    {
      Icon: React.ComponentClass<SVGIconProps>;
      color?: { name: string; value: string; var: string };
    }
  >
>;

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
  Paused: {
    Icon: PauseCircleIcon,
  },
  Unknown: {
    Icon: QuestionCircleIcon,
    color: unknownColor,
  },
};

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
  let icon: JSX.Element | null = null;
  if (status === 'Loading') {
    icon = <Spinner isInline className={className} />;
  } else {
    const IconComponent = iconList[status]?.Icon;
    if (IconComponent) {
      icon = (
        <IconComponent
          color={isDisabled ? disabledColor.value : iconList[status]?.color?.value || '#151515'} // TODO use --pf-global--Color--100 after upgrading PF, for some reason that is resolving to #000 in this version
          className={className}
        />
      );
    }
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
