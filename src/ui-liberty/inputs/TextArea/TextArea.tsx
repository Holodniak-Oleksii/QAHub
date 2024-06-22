import { renderInputError } from "@/common/helpers";
import { forwardRef } from "react";
import { Component, Label, Message, Wrapper } from "./styles";
import { ITextAreaProps } from "./types";

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (props, ref) => {
    const { message, error, label, customHeight, unValidate, ...rest } = props;
    return (
      <Wrapper customHeight={customHeight} unValidate={unValidate}>
        {label && <Label>{label}</Label>}
        <Component
          {...rest}
          ref={ref}
          customHeight={customHeight}
          error={error}
        />
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
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
