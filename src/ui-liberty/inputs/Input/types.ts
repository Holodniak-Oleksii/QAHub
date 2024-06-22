import React, { ReactNode } from "react";
import { IBaseInputProps } from "../types";

export interface IInputProps extends IBaseInputProps {
  message?: string | ReactNode;
  label?: string;
  type?: "text" | "number" | "password";
  endIcon?: string;
  endIconComponent?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  id?: string;
  readOnly?: boolean;
  startIcon?: ReactNode;
}

export interface IInputComponentProps
  extends Omit<IInputProps, "error" | "mask"> {
  haveEndIcon: boolean;
  isError: boolean;
}

export interface IInputWrapperProps
  extends Pick<IInputComponentProps, "isError" | "haveEndIcon"> {
  isDisabled: boolean;
  startIcon?: boolean;
}

export interface IPosition {
  position: "left" | "right";
}
