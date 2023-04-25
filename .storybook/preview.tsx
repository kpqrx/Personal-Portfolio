import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import {
  GlobalStyle,
  SVGDefinitions,
  lightTheme,
  darkTheme,
} from "../src/theme";
import { ThemeProvider } from "styled-components";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
  (Story) => (
    <>
      <SVGDefinitions />
      <Story />
    </>
  ),
];

export default preview;
