import { IError } from "@/common/types/general";
import React from "react";

export interface IOption<T> {
  value: T;
  id: number | string;
  label: string;
}
export interface IBaseInputProps extends IError {
  value?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IBaseSelectProps extends IBaseInputProps {
  options: IOption<string>[];
}

export type TSelectOptionGenericType = string | number | boolean | object;
