import { IOption } from "@/common/types";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { IBaseSelectProps } from "../types";

export interface IListOpenerProps {
  withoutError?: boolean;
}

export interface ISelectProps
  extends Omit<IBaseSelectProps, "options">,
    IListOpenerProps {
  registerOptions?: UseFormRegisterReturn<string>;
  options: IOption[];
  onChangeOption?: (option: IOption) => void;
  initialValue?: IOption;
  renderOptionLeft?: (option: IOption) => ReactNode;
  renderInputLeft?: () => ReactNode;
  isShowingClearOption?: boolean;
}

export interface ISelectComponentProps
  extends Omit<ISelectProps, "options" | "label" | "value" | "error"> {
  isError: boolean;
}

export interface ISelectWrapperProps extends ISelectComponentProps {
  isDisabled?: boolean;
}
