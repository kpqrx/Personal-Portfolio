import type { AppProps } from "next/app";
import { GlobalStyle, SVGDefinitions, lightTheme, darkTheme } from "@/theme";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setDarkTheme] = useState(false);
  //TODO: Move to app state

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SVGDefinitions />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
