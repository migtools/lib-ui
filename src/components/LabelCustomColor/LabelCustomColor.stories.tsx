import * as React from 'react';
import { SketchPicker } from 'react-color';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { LabelCustomColor } from './LabelCustomColor';

export const LabelCustomColorPicker: React.FC = () => {
  const [color, setColor] = React.useState('#4A90E2');
  return (
    <>
      <LabelCustomColor color={color}>Label Text Here</LabelCustomColor>
      <br />
      <br />
      <SketchPicker color={color} onChangeComplete={(newColor) => setColor(newColor.hex)} />
    </>
  );
};

export const LabelCustomColorExamples: React.FC = () => {
  // Colors from https://github.com/konveyor/tackle2-hub/blob/main/migration/v3/seed/main.go#L331-L766
  const colors = [
    '#773CF3',
    '#74F33C',
    '#F33CA9',
    '#3CF342',
    '#4EF33C',
    '#F33CE6',
    '#F3AC3C',
    '#3CF367',
    '#F3D23C',
    '#B43CF3',
    '#F3493C',
    '#3C65F3',
    '#3CF3E1',
    '#3CF3A4',
    '#F33C47',
    '#F36F3C',
    '#B1F33C',
    '#F3E93C',
    '#3C7CF3',
    '#3C3FF3',
    '#3CDFF3',
    '#F33C6C',
    '#D93CF3',
    '#3CF37F',
    '#3CF3CA',
    '#F33CCF',
    '#9AF33C',
    '#F3953C',
    '#D7F33C',
    '#3CA2F3',
    '#9C3CF3',
  ];
  return (
    <>
      {colors.map((color) => (
        <LabelCustomColor key={color} color={color} className={spacing.mXs}>
          {color}
        </LabelCustomColor>
      ))}
    </>
  );
};
