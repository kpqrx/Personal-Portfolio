import designTokens from "../../design-tokens.json";
import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const {
  sizes,
  radii,
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  breakpoints,
} = designTokens;

const loadedFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const base = {
  sizes,
  radii,
  breakpoints,
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
};

export const lightTheme = {
  ...base,
  colors: {
    ...colors,
    text: {
      primary: colors.black,
      secondary: colors.gray[600],
      tertiary: colors.gray[400],
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
      primary: colors.gray[700],
      secondary: colors.gray[600],
      tertiary: colors.gray[500],
    },
  },
} as const;

export const GlobalStyle = createGlobalStyle`
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

  html {
    font-size: 16px;
    font-family: ${loadedFont.style.fontFamily};
  }
`;

export const SVGDefinitions = () => (
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
