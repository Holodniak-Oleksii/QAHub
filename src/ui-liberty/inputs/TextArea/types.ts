import { ReactNode } from "react";
import { IBaseInputProps } from "../types";

export interface IWrapperProps {
  customHeight?: number;
  unValidate?: boolean;
}

export interface ITextAreaProps extends IBaseInputProps, IWrapperProps {
  message?: string | ReactNode;
  readOnly?: boolean;
}
