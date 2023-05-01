import designTokens from "../../design-tokens.json";
import {
  createGlobalStyle,
  ThemeProvider as BaseThemeProvider,
} from "styled-components";
import { Poppins } from "next/font/google";
import { createContext, useCallback, useEffect, useState } from "react";
import type { PropsWithChildren } from "react";

const { sizes, radii, colors, fontWeights, fontSizes, lineHeights, screens } =
  designTokens;

const loadedFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
});

const base = {
  sizes: (...values: (keyof typeof sizes)[]) =>
    values.map((value) => sizes[value]).join(" "),
  radii,
  breakpoints: (size: keyof typeof screens) =>
    ` screen and (min-width: ${screens[size]})`,
  screens,
  typography: {
    xl: {
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.xl,
      fontWeight: fontWeights.bold,
    },
    lg: {
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.lg,
      fontWeight: fontWeights.regular,
    },
    md: {
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
      fontWeight: fontWeights.regular,
    },
    sm: {
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
      fontWeight: fontWeights.regular,
    },
    xs: {
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
      fontWeight: fontWeights.regular,
    },
  },
  fontSizes,
  fontWeights,
  lineHeights,
};

export const lightTheme = {
  ...base,
  colors: {
    ...colors,
    text: {
      primary: colors.black,
      secondary: colors.gray[600],
      tertiary: colors.gray[500],
    },
    bg: {
      primary: colors.white,
      secondary: colors.gray[200],
      tertiary: colors.gray[300],
    },
  },
} as const;

export const darkTheme = {
  ...base,
  colors: {
    ...colors,
    text: {
      primary: colors.white,
      secondary: colors.gray[300],
      tertiary: colors.gray[400],
    },
    bg: {
      primary: colors.gray[800],
      secondary: colors.gray[600],
      tertiary: colors.gray[500],
    },
  },
} as const;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .hidden {
    position: absolute;
    width: 0;
    height: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol { 
    list-style: none;
  }

  button, select, input, textarea {
    background: transparent;
    border: none;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: initial;
  }

  html {
    font-size: 16px;
    font-family: ${loadedFont.style.fontFamily};
  }
`;

const SVGDefinitions = () => (
  <svg className="hidden">
    <defs>
      <linearGradient id="gradient">
        <stop offset="0%" stopColor={colors.pink} />
        <stop offset="50%" stopColor={colors.blue} />
        <stop offset="100%" stopColor={colors.cyan} />
      </linearGradient>
    </defs>
  </svg>
);

type DarkModeContextType = {
  isDarkModeEnabled: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext({} as DarkModeContextType);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkModeEnabled, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevState) => !prevState);
  }, [setDarkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkModeEnabled,
        toggleDarkMode,
      }}
    >
      <BaseThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
        <GlobalStyle />
        <SVGDefinitions />
        {children}
      </BaseThemeProvider>
    </DarkModeContext.Provider>
  );
};
