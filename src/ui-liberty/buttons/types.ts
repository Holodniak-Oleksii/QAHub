import { HTMLAttributes } from "react";

export interface IBaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined" | "bright";
  size?: "sm" | "md" | "lg" | "xs";
  type?: "button" | "submit";

  fullWidth?: boolean;
}
