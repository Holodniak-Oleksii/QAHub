import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const Theme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
