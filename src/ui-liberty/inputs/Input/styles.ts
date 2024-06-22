import { IError } from "@/common/types/general";
import styled, { css } from "styled-components";
import { IInputComponentProps, IInputWrapperProps, IPosition } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  min-height: 87px;
  position: relative;
`;

const componentStyles = css`
  color: ${({ theme }) => theme.colors.main0};

  &::placeholder {
    color: ${({ theme }) => theme.colors.main300};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.main0};
  }

  background: transparent;
  border: 0px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  width: 100%;
`;

export const Component = styled.input<IInputComponentProps>`
  ${componentStyles}
`;

export const ComponentWrapper = styled.div<IInputWrapperProps>`
  color: ${({ theme }) => theme.colors.gray800};
  display: flex;
  align-items: center;
  gap: 6px;

  ${({ theme, isError }) =>
    isError
      ? css`
          border: 1px solid ${theme.colors.error600};
        `
      : css`
          border: 1px solid ${theme.colors.main500};
          &:focus {
            border: 1px solid ${theme.colors.main400};
          }
        `};
  padding: ${({ haveEndIcon }) =>
    haveEndIcon ? `12px 48px 12px 16px` : `12px 16px;`};

  ${({ startIcon }) => !!startIcon && "padding: 12px 16px 12px 48px;"}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray300};
    `}

  border-radius: 8px;
  transition: 0.2s ease;
  height: 44px;
  background: ${({ theme }) => theme.colors.main500};
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.main200};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 4px;
`;

export const Message = styled.span<IError>`
  color: ${({ theme, error }) =>
    error ? theme.colors.error600 : theme.colors.gray400};
  font-size: 10px;
  margin-top: 2px;
  font-weight: 400;
  text-align: right;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.button<IPosition>`
  ${({ theme }) => theme.flex.center};
  position: absolute;
  top: 50%;
  height: 100%;
  aspect-ratio: 1 / 1;
  ${({ position }) => `${position}: 0`};
  transform: translate(0, -50%);
  svg {
    path {
      width: 20px;
      height: 20px;
    }
  }
`;
