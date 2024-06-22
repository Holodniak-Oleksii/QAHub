import { FieldError, Merge } from "react-hook-form";
import { EModal } from "../enums";

export interface IOption {
  label: string;
  value: string;
  id: number;
}

export interface IActiveble {
  isActive?: boolean;
}

export interface IOpenable {
  isOpen: boolean;
}

export interface IInvalid {
  isError: boolean;
}

export interface IDisabled {
  disabled: boolean;
}

export interface IModalProps {
  id: EModal;
}

export type TErrorForm =
  | FieldError
  | Merge<FieldError, (FieldError | undefined)[]>;
export interface IError {
  error?: TErrorForm;
}
