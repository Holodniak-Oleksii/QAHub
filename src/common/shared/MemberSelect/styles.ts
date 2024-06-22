import { IOpenable } from "@/common/types";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const InputContainer = styled.div`
  ${({ theme }) => theme.flex.row};
  flex-wrap: wrap;
  width: 100%;
  gap: 4px;

  padding: 6px 16px;

  border-radius: 8px;
  transition: 0.2s ease;
  min-height: 44px;
  background: ${({ theme }) => theme.colors.main500};
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  width: 100%;

  position: relative;
  z-index: 4;
`;

export const Input = styled.input`
  flex-grow: 1;
  min-width: 100px;
  height: 32px;

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
`;

export const Portal = styled.div<IOpenable>`
  ${({ theme }) => theme.flex.column};
  box-shadow: ${({ theme }) => theme.boxShadow.xl};
  border: 1px solid ${({ theme }) => theme.colors.main400};

  ${({ isOpen }) =>
    !isOpen
      ? css`
          opacity: 0;
          visibility: hidden;
          transform: translateY(calc(100% + 2px));
          pointer-events: none;
        `
      : css`
          transform: translateY(calc(100% + 10px));
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

export const Item = styled.div`
  width: 100%;
  padding: 12px;
  ${({ theme }) => theme.flex.row};
  transition: all 0.2s ease-out;
  gap: 4px;
  background: ${({ theme }) => theme.colors.main500};
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.main400};
    }
  }
`;

export const Name = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.main200};
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.main200};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 4px;
`;
