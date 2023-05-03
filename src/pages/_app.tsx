import type { AppProps } from "next/app";
import { ThemeProvider } from "@/theme";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/store";
import { LazyMotion, domMax } from "framer-motion";

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <LazyMotion features={domMax} strict>
          <Component {...pageProps} />
        </LazyMotion>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
