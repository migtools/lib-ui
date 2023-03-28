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

// Colors from https://sashamaps.net/docs/resources/20-colors/ with pink, lavender, beige, mind and apricot removed for being too bright
const EXAMPLE_COLORS = [
  '#E6194B', // Red
  '#3CB44B', // Green
  '#FFE119', // Yellow
  '#4363D8', // Blue
  '#F58231', // Orange
  '#911EB4', // Purple
  '#42D4F4', // Cyan
  '#F032E6', // Magenta
  '#BFEF45', // Lime
  '#469990', // Teal
  '#9A6324', // Brown
  '#800000', // Maroon
  '#808000', // Olive
  '#000075', // Navy
  '#A9A9A9', // Grey
  '#000000', // Black
];

export const LabelCustomColorExamples: React.FC = () => (
  <>
    {EXAMPLE_COLORS.map((color) => (
      <LabelCustomColor key={color} color={color} className={spacing.mXs}>
        {color}
      </LabelCustomColor>
    ))}
  </>
);

export const LabelCustomColorPerfTest: React.FC = () => (
  <>
    {[
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
      ...EXAMPLE_COLORS,
    ].map((color, index) => (
      <LabelCustomColor key={`${index}-${color}`} color={color} className={spacing.mXs}>
        {color}
      </LabelCustomColor>
    ))}
  </>
);
