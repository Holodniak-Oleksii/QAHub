import styled, { css } from "styled-components";
import { buttonSizes, fontSizes, heightSizes } from "./data";
import { IButtonProps } from "./types";

// Variants
const text = css`
  background: ${({ theme }) => theme.colors.text500};
  color: ${({ theme }) => theme.colors.main700};
  &:disabled {
    color: ${({ theme }) => theme.colors.text900};
  }

  &:not(:disabled) {
    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.main600};
      }
    }
  }
`;

const outlined = css`
  color: ${({ theme }) => theme.colors.main600};
  border: 1px solid ${({ theme }) => theme.colors.main600};
  &:disabled {
    color: ${({ theme }) => theme.colors.gray300};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }

  &:not(:disabled) {
    @media (hover: hover) {
      &:hover {
        background: ${({ theme }) => theme.colors.main25};
        color: ${({ theme }) => theme.colors.main700};
        border: 1px solid ${({ theme }) => theme.colors.main700};
      }
    }
  }
`;

const contained = css`
  background: ${({ theme }) => theme.colors.main600};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  color: #fff;
  &:disabled {
    background: ${({ theme }) => theme.colors.main300};
  }

  &:not(:disabled) {
    @media (hover: hover) {
      &:hover {
        background: ${({ theme }) => theme.colors.main700};
      }
    }
  }
`;

const bright = css`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.main0};
  box-shadow: ${({ theme }) => theme.boxShadow.xs};
  border-radius: 6px;
`;

// Sizes

export const Component = styled.button<IButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  padding: ${({ size }) => buttonSizes[size || "md"]};
  ${({ theme }) => theme.flex.center};
  font-size: ${({ size }) => fontSizes[size || "md"]};
  height: ${({ size }) => heightSizes[size || "md"]}px;

  ${({ variant }) => variant === "contained" && contained}
  ${({ variant }) => variant === "outlined" && outlined}
  ${({ variant }) => variant === "bright" && bright}
  ${({ variant }) => variant === "text" && text}

  gap: 8px;
  border-radius: 8px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.4px;
  transition: all 0.2s ease;
  &:not(:disabled) {
    &:active {
      transform: scale(0.98);
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
