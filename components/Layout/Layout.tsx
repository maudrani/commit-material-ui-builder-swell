import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

export default function Layout(props: { children?: any }) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
