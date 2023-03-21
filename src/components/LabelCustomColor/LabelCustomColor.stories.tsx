import * as React from 'react';
import { SketchPicker } from 'react-color';
import { LabelCustomColor } from './LabelCustomColor';

export const LabelCustomColorExample: React.FC = () => {
  const [color, setColor] = React.useState('#0066CC');
  return (
    <>
      <LabelCustomColor color={color} />
      <br />
      <br />
      <SketchPicker color={color} onChangeComplete={(newColor) => setColor(newColor.hex)} />
    </>
  );
};
