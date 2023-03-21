import * as React from 'react';
import { Label, LabelProps } from '@patternfly/react-core';
import tinycolor from 'tinycolor2';

// Omit the variant prop, we won't support the outline variant
export interface ILabelCustomColorProps extends Omit<LabelProps, 'variant' | 'color'> {
  color: string;
}

// TODO how do we handle dark mode??

export const LabelCustomColor: React.FC<ILabelCustomColorProps> = ({ color }) => {
  const { borderColor, backgroundColor, textColor } = React.useMemo(() => {
    const colorObj = tinycolor(color);
    const backgroundColorObj = colorObj.lighten(75);
    return {
      borderColor: color,
      backgroundColor: backgroundColorObj.toString(),
      textColor: colorObj.isLight() ? colorObj.darken(75).toString() : color,
    };
  }, [color]);
  return (
    <Label
      style={
        {
          '--pf-c-label__content--before--BorderColor': borderColor,
          '--pf-c-label__content--link--hover--before--BorderColor': borderColor, // Should it be any different?
          '--pf-c-label__content--link--focus--before--BorderColor': borderColor, // Should it be any different?
          '--pf-c-label--BackgroundColor': backgroundColor,
          '--pf-c-label__icon--Color': textColor,
          '--pf-c-label__content--Color': textColor,
          background: `linear-gradient(to top, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)) ${color}`,
        } as React.CSSProperties
      }
    >
      Label Text Here
    </Label>
  );
};

/*

Note: if we were to support the outline variant of Label,
we would need to account for the following additional CSS variables:

--pf-c-label--m-outline__content--Color
--pf-c-label--m-outline__content--before--BorderColor
--pf-c-label--m-outline__content--link--hover--before--BorderColor
--pf-c-label--m-outline__content--link--focus--before--BorderColor
--pf-c-label--m-editable__content--before--BorderColor
--pf-c-label--m-editable__content--hover--before--BorderColor
--pf-c-label--m-editable__content--focus--before--BorderColor

*/
