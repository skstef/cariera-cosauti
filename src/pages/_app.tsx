import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider, createTheme } from "@mui/material";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['"Lato"', "sans-serif"].join(","),
    },
    palette: {
      mode: "dark",
      primary: { main: "#E8CF7A" },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default appWithTranslation(App);
