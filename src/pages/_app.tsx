import type { AppProps } from "next/app";
import { ThemeProvider } from "@/theme";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
