import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

import { addAlpha } from './add-opacity';
import { colorBlending } from './color-blending';
import { convertToRGB } from './convert-to-rgb';
import { invertColor } from './invert-color';
import { ThemeContext } from './with-theme';

const CustomStyles = createGlobalStyle`
  .custom {
    --bg-primary: ${(props) => convertToRGB(props.theme.bgColor || '#191919').join(' ')};
    --bg-primary-dk: ${(props) => colorBlending(-0.4, props.theme.bgColor || '#191919')};
    --bg-primary-lg: ${(props) => colorBlending(0.04, props.theme.bgColor || '#191919')};
    --bg-secondary: ${(props) => convertToRGB(props.theme.bgSecondaryColor || '#4338ca').join(' ')};
    --bg-secondary-dk: ${(props) => colorBlending(-0.4, props.theme.bgSecondaryColor || '#4338ca')};
    --bg-additional: ${(props) => convertToRGB(props.theme.additionalColor || '#3b82f6').join(' ')};
    --bg-additional-dk: ${(props) => colorBlending(-0.4, props.theme.additionalColor || '#3b82f6')};
    --text-primary: ${(props) => invertColor(props.theme.bgColor || '#191919', true)};
    --text-primary-transparent: ${(props) =>
      addAlpha(invertColor(props.theme.bgColor || '#191919', true), 0.07)};
    --border-primary: ${(props) => addAlpha(invertColor(props.theme.bgColor || '#191919'), 0.44)};
    --text-secondary: ${() => convertToRGB('#1E293B').join(' ')};
    --color-primary: ${() => convertToRGB('#E11D48').join(' ')};
    --color-gold: ${() => convertToRGB('#e3b224').join(' ')};
    --color-mp: ${() => convertToRGB('#04a1dd').join(' ')};
    --color-sta: ${() => convertToRGB('#56ff62').join(' ')};
    --color-xp: ${() => convertToRGB('#ffa222').join(' ')};
  }
  body {
    ${tw`bg-primary text-primaryColor transition-all duration-200`}
  }
`;

// -webkit-tap-highlight-color: ${theme`bg-rose-500`};

export const TwinGlobalStyles = () => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  return <CustomStyles theme={theme} />;
};
