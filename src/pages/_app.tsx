import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider, createTheme } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
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
}
