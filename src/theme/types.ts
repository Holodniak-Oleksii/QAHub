import { IPallette } from "./colors/types";

interface ITextSettings {
  color: string;
  weight: number;
  size: number;
}

export interface IGeneralTheme {
  text: {
    overflow: string;
    getLineClamp: (lines: number) => string;
    getDefault: (settings?: Partial<ITextSettings>) => string;
  };
  absoluteCenter: string;
  flex: {
    center: string;
    row: string;
    column: string;
    between: string;
  };
  content: {
    mainContainerPadding: string;
    headerSpace: string;
    mainContainerWidth: string;
    indention: string;
  };
}

export interface ITheme extends IGeneralTheme {
  colors: IPallette;
  boxShadow: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
    xl3: string;
    xl4: string;
  };
}
