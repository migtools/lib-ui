import * as React from 'react';
import { SketchPicker } from 'react-color';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import {
  global_palette_black_1000 as black,
  global_palette_black_500 as gray,
  global_palette_blue_300 as blue,
  global_palette_green_300 as green,
  global_palette_cyan_300 as cyan,
  global_palette_purple_600 as purple,
  global_palette_gold_300 as gold,
  global_palette_orange_300 as orange,
} from '@patternfly/react-tokens';

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

// Colors from https://sashamaps.net/docs/resources/20-colors/ with some colors removed for being too bright
// and PF global pallete colors used in place of their closest counterparts
const EXAMPLE_COLORS = [
  '#D95F55', // Red (PF red is weird because 100 is too close to Maroon and 50 is too bright)
  green.value, // Green
  gold.value, // Gold
  blue.value, // Blue
  orange.value, // Orange
  purple.value, // Purple
  cyan.value, // Cyan
  '#F032E6', // Magenta
  '#BFEF45', // Lime
  '#469990', // Teal
  '#9A6324', // Brown
  '#800000', // Maroon
  '#808000', // Olive
  '#000075', // Navy
  gray.value, // Gray
  black.value, // Black
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
