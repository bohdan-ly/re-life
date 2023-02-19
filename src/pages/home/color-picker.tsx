import React from 'react';
import { SketchPicker } from 'react-color';

import { ThemeContext } from 'shared/ui/theme';

export const ColorPicker = () => {
  const { theme, switchTheme } = React.useContext(ThemeContext);
  const [color, setColor] = React.useState(theme.bgColor);

  return (
    <SketchPicker
      className="absolute right-3"
      color={color}
      onChangeComplete={(newColor) => {
        setColor(newColor.hex);
        window.localStorage.setItem(
          'color-theme',
          JSON.stringify({ ...theme, bgColor: newColor.hex }),
        );
        switchTheme({ ...theme, bgColor: newColor.hex });
      }}
    />
  );
};
