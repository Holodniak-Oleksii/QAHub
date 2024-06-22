import styled from "styled-components";
import { IContentProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.center}
  width: 100%;
  position: relative;
  height: 100%;
  padding: 16px;
  overflow: hidden;
  overflow-y: auto;
  * {
    font-family: "Roboto", sans-serif;
  }
`;

export const Content = styled.div<IContentProps>`
  max-width: ${({ maxWidth }) => `${maxWidth || 1024}px`};
  min-height: ${({ minHeight }) => (minHeight ? minHeight + "px" : undefined)};
  box-shadow: ${({ theme }) => theme.boxShadow.xs};
  width: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.main600};
  padding: 24px;
  position: relative;
`;
