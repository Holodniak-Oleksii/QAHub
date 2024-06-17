import { ReactNode } from "react";
import { IBaseButtonProps } from "../types";

export interface IButtonProps extends IBaseButtonProps {
  endIcon?: ReactNode;
  startIcon?: ReactNode;
}
