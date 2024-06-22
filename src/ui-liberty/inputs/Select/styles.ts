import { IOpenable } from "@/common/types";
import styled, { css } from "styled-components";
import {
  IListOpenerProps,
  ISelectComponentProps,
  ISelectWrapperProps,
} from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
  gap: 4px;
  min-height: 87px;
`;
export const Container = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.main200};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.error600};
  font-size: 10px;
  margin-top: -2px;
  font-weight: 400;
  text-align: right;
`;

export const Input = styled.input<ISelectComponentProps>`
  color: ${({ theme }) => theme.colors.main0};
  font-weight: 500;
  border: 0px;
  ${({ theme, isError }) =>
    isError &&
    css`
      &:focus {
        border: 1px solid ${theme.colors.main400};
      }
    `};

  &::placeholder {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.main300};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.main0};
  }

  outline: none;
  padding: 0px;
  background-color: transparent;
  font-size: 14px;
  line-height: 150%;
  width: 100%;
`;

export const InputWrapper = styled.div<ISelectWrapperProps>`
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

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray300};
    `}

  align-items:center;
  border-radius: 8px;
  transition: 0.2s ease;
  height: 44px;
  background: ${({ theme }) => theme.colors.main500};
  padding: 12px 48px 12px 16px;
  width: 100%;
  display: flex;
  gap: 6px;
`;

export const IndicatorImage = styled.div<IOpenable>`
  border: 2px solid ${({ theme }) => theme.colors.main600};
  ${({ theme }) => theme.flex.center};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  padding: 4px;
  img {
    object-fit: contain;
    width: 100%;
    transition: all 0.3s ease;
    height: 100%;
    ${({ isOpen }) => isOpen && "transform: rotateX(180deg)"}
  }
`;

export const ArrowIconWrapper = styled.div<IOpenable>`
  ${({ theme }) => theme.flex.center};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  width: 24px;
  height: 24px;
  aspect-ratio: 1 / 1;
  padding: 4px;
  user-select: none;
  img {
    object-fit: contain;
    width: 100%;
    transition: all 0.3s ease;
    height: 100%;
    ${({ isOpen }) => isOpen && "transform: rotateX(180deg)"}
  }
`;

export const Row = styled.div`
  ${({ theme }) => theme.flex.row};
  min-height: 44px;
  padding: 10px 16px;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.main200};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  @media (hover: hover) {
    transition: all 0.4s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.main400};
    }
  }
`;

export const List = styled.div<IOpenable & IListOpenerProps>`
  ${({ theme }) => theme.flex.column};
  box-shadow: ${({ theme }) => theme.boxShadow.xl};
  border: 1px solid ${({ theme }) => theme.colors.main400};
  ${({ isOpen, withoutError }) =>
    !isOpen
      ? css`
          opacity: 0;
          transform: translateY(calc(100% - ${withoutError ? -18 : 18}px));
          visibility: hidden;
          pointer-events: none;
        `
      : css`
          transform: translateY(calc(100% - ${withoutError ? -12 : 12}px));
        `}

  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 3;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.main500};

  max-height: 220px;
  overflow: hidden;
  overflow-y: auto;
  transition: all 0.2s ease-out;
`;

export const NotFound = styled.div`
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.flex.center};

  height: 100px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;
