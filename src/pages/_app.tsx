import type { AppProps } from "next/app";
import { GlobalStyle, SVGDefinitions, lightTheme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <SVGDefinitions />
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
