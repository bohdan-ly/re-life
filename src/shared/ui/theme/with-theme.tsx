import React from 'react';

export type Theme = {
  bgColor: string;
  textColor: string;
  buttonColor: string;
  bgSecondaryColor: string;
};

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (storedPrefs && typeof storedPrefs === 'string') {
      return JSON.parse(storedPrefs);
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return {
        bgColor: '#191919',
        textColor: '#ffffff',
        buttonColor: '#007aff',
        bgSecondaryColor: '#007aff',
      };
    }
  }

  return {
    bgColor: '#191919',
    textColor: '#ffffff',
    buttonColor: '#007aff',
    bgSecondaryColor: '#007aff',
  };
};

export const ThemeContext = React.createContext({
  theme: {
    bgColor: '#ffffff',
    textColor: '#191919',
    buttonColor: '#007aff',
    bgSecondaryColor: '#007aff',
  },
  switchTheme: (theme: Theme) => {},
});

export const withTheme = (component: React.FC<{}>) => {
  return function WithStore() {
    const [theme, setTheme] = React.useState<Theme>(getInitialTheme);

    React.useEffect(() => {
      localStorage.setItem('color-theme', JSON.stringify(theme));
    }, [theme]);

    const switchTheme = (theme: Theme) => {
      setTheme(theme);
    };

    return (
      <ThemeContext.Provider value={{ theme, switchTheme }}>{component({})}</ThemeContext.Provider>
    );
  };
};
