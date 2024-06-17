import { forwardRef } from "react";
import { Component } from "./styles";
import { IButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    variant = "contained",
    size = "md",
    endIcon,
    startIcon,
    type = "button",
    fullWidth,
    ...rest
  } = props;
  return (
    <Component
      ref={ref}
      {...rest}
      variant={variant}
      size={size}
      type={type}
      fullWidth={fullWidth}
    >
      {startIcon}
      {children}
      {endIcon}
    </Component>
  );
});

Button.displayName = "Button";
export default Button;
