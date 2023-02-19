// components/GlobalStyles.js

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

import { colorBlending } from './color-blending';
import { ThemeContext, Theme } from './with-theme';

const CustomStyles = createGlobalStyle`
  .custom {
    --bg-primary: ${(props) => props.theme.bgColor};
    --bg-primary-dk: ${(props) => colorBlending(-0.4, props.theme.bgColor)};
    --bg-secondary: ${(props) => props.theme.bgSecondaryColor};
    --text-primary: ${(props) => props.theme.textColor};
    --text-secondary: #1E293B;
    --color-primary: #E11D48;
  }
  body {
    ${tw`bg-primary text-maximus transition-all duration-200`}
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
