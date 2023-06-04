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
      inverted: colors.white,
    },
    bg: {
      primary: colors.white,
      secondary: colors.gray[200],
      tertiary: colors.gray[300],
    },
    brand: {
      primary: colors.cyan,
      secondary: colors.pink,
      tertiary: colors.blue,
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
      inverted: colors.black,
    },
    bg: {
      primary: colors.gray[800],
      secondary: colors.gray[600],
      tertiary: colors.gray[500],
    },
    brand: {
      primary: colors.orange,
      secondary: colors.green,
      tertiary: colors.blue,
    },
  },
} as const;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.25s ease;
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
    font-size: 14px;
    font-family: ${loadedFont.style.fontFamily};

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  body {
    overflow-x: hidden;
  }
`;

export const SVGDefinitions = () => (
  <svg className="hidden">
    <defs>
      <linearGradient id="gradient">
        <stop offset="0%" stopColor={colors.orange} />
        <stop offset="50%" stopColor={colors.green} />
        <stop offset="100%" stopColor={colors.blue} />
      </linearGradient>
    </defs>
  </svg>
);

type ThemeToggleFunctionOptionsType = {
  forceSetDark?: boolean;
  toggleLocalStorage?: boolean;
};

type ThemeContextType = {
  isDarkModeEnabled: boolean;
  toggleDarkMode: (options?: ThemeToggleFunctionOptionsType) => void;
  isHeaderInverted: boolean;
  toggleHeaderInverted: () => void;
};

type PersistedThemeType = "LIGHT" | "DARK";

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkModeEnabled, setDarkMode] = useState(false);
  const [isHeaderInverted, setIsHeaderInverted] = useState(false);

  const setLocalStorageTheme = useCallback((theme: PersistedThemeType) => {
    if (!window.localStorage) {
      return;
    }
    window.localStorage.setItem("theme", theme);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevState) => !prevState);
    setLocalStorageTheme(isDarkModeEnabled ? "LIGHT" : "DARK");
  }, [isDarkModeEnabled, setDarkMode, setLocalStorageTheme]);

  const toggleHeaderInverted = useCallback(() => {
    setIsHeaderInverted((prevState) => !prevState);
  }, [setIsHeaderInverted]);

  useEffect(() => {
    if (!window.localStorage) {
      return;
    }

    const persistedTheme = window.localStorage.getItem("theme");
    const deviceDarkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleMediaQueryChange = ({
      matches: shouldSetDarkMode,
    }: MediaQueryListEvent) => {
      setDarkMode(shouldSetDarkMode);
      setLocalStorageTheme(shouldSetDarkMode ? "DARK" : "LIGHT");
    };

    setDarkMode(
      persistedTheme
        ? persistedTheme === "DARK"
        : deviceDarkModeMediaQuery.matches
    );

    deviceDarkModeMediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      deviceDarkModeMediaQuery.removeEventListener(
        "change",
        handleMediaQueryChange
      );
  }, [setLocalStorageTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkModeEnabled,
        toggleDarkMode,
        isHeaderInverted,
        toggleHeaderInverted,
      }}
    >
      <BaseThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
        <GlobalStyle />
        <SVGDefinitions />
        {children}
      </BaseThemeProvider>
    </ThemeContext.Provider>
  );
};
