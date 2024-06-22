import imageEyeOff from "@/assets/icons/eye-off.svg";
import imageEye from "@/assets/icons/eye.svg";
import { renderInputError } from "@/common/helpers";
import { forwardRef, useState } from "react";
import {
  Component,
  ComponentWrapper,
  Container,
  Icon,
  Label,
  Message,
  Wrapper,
} from "./styles";
import { IInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const {
    message,
    error,
    type = "text",
    label,
    endIcon,
    onClick,
    startIcon,
    endIconComponent,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };

  const renderEndIcon = () => {
    if (endIcon || endIconComponent) {
      return (
        <Icon
          position="right"
          type={"button"}
          className="end-icon"
          onClick={onClickHandler}
        >
          {endIconComponent ? (
            endIconComponent
          ) : (
            <img src={endIcon} alt={"image eye"} />
          )}
        </Icon>
      );
    }
  };

  return (
    <Wrapper className="form_item">
      {label && <Label>{label}</Label>}
      <Container>
        <ComponentWrapper
          haveEndIcon={!!endIcon}
          isDisabled={!!props.disabled}
          isError={!!error}
          startIcon={!!startIcon}
        >
          {!!startIcon && (
            <Icon type={"button"} className="end-icon" position="left">
              {startIcon}
            </Icon>
          )}

          <Component
            {...rest}
            isError={!!error}
            ref={ref}
            onClick={onClickHandler}
            type={isOpen ? "text" : type}
            aria-invalid={!!error}
            haveEndIcon={!!endIcon}
          />
        </ComponentWrapper>

        {type === "password" && (
          <Icon
            onClick={() => setIsOpen((prev) => !prev)}
            type={"button"}
            className="end-icon"
            position="right"
          >
            {isOpen ? (
              <img src={imageEye} alt={"image eye"} />
            ) : (
              <img src={imageEyeOff} alt={"image eye"} />
            )}
          </Icon>
        )}

        {renderEndIcon()}
      </Container>
      {error && <Message error={error}>{renderInputError(error)}</Message>}
      {!!message &&
        !error &&
        (typeof message === "string" ? (
          <Message error={error}>{message}</Message>
        ) : (
          message
        ))}
    </Wrapper>
  );
});

Input.displayName = "Input";

export default Input;
