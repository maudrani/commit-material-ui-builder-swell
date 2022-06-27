import { createTheme, ThemeProvider } from "@mui/material";

export default function Layout(props: { children?: any }) {
  const theme = createTheme();
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
