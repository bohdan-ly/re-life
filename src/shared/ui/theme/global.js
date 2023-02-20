// components/GlobalStyles.js

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

import { addAlpha } from './add-opacity';
import { colorBlending } from './color-blending';
import { invertColor } from './invert-color';
import { ThemeContext, Theme } from './with-theme';

const CustomStyles = createGlobalStyle`
  .custom {
    --bg-primary: ${(props) => props.theme.bgColor};
    --bg-primary-dk: ${(props) => colorBlending(-0.4, props.theme.bgColor)};
    --bg-secondary: ${(props) => props.theme.bgSecondaryColor};
    --text-primary: ${(props) => invertColor(props.theme.bgColor, true)};
    --text-primary-transparent: ${(props) =>
      addAlpha(invertColor(props.theme.bgColor, true), 0.07)};
    --border-primary: ${(props) => addAlpha(invertColor(props.theme.bgColor), 0.44)};
    --text-secondary: #1E293B;
    --color-primary: #E11D48;
  }
  body {
    ${tw`bg-primary text-primaryColor transition-all duration-200`}
  }
`;

// -webkit-tap-highlight-color: ${theme`bg-rose-500`};

export const GlobalStyles = () => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  return (
    <>
      <BaseStyles />
      <CustomStyles theme={theme} />
    </>
  );
};
