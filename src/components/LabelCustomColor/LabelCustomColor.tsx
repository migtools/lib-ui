import * as React from 'react';
import { Label, LabelProps } from '@patternfly/react-core';
import tinycolor from 'tinycolor2';

// Omit the variant prop, we won't support the outline variant
export interface ILabelCustomColorProps extends Omit<LabelProps, 'variant' | 'color'> {
  color: string;
}

// TODO how do we handle dark mode??

export const LabelCustomColor: React.FC<ILabelCustomColorProps> = ({ color, ...props }) => {
  const { borderColor, backgroundColor, textColor } = React.useMemo(() => {
    // Lighten the background 25%, and lighten it further if necessary until it can support readable text
    const bgColorObj = tinycolor(color).lighten(25);
    let blackTextReadability;
    let whiteTextReadability;
    const calculateBlackWhiteReadability = () => {
      blackTextReadability = tinycolor.readability(bgColorObj, '#000000');
      whiteTextReadability = tinycolor.readability(bgColorObj, '#FFFFFF');
    };
    calculateBlackWhiteReadability();
    while (blackTextReadability < 9 && whiteTextReadability < 9) {
      bgColorObj.lighten(5);
      calculateBlackWhiteReadability();
    }
    // Darken or lighten the text color until it is sufficiently readable
    const textColorObj = tinycolor(color);
    while (tinycolor.readability(bgColorObj, textColorObj) < 7) {
      if (blackTextReadability > whiteTextReadability) {
        textColorObj.darken(5);
      } else {
        textColorObj.lighten(5);
      }
    }
    return {
      borderColor: color,
      backgroundColor: bgColorObj.toString(),
      textColor: textColorObj.toString(),
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
        } as React.CSSProperties
      }
      {...props}
    />
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
