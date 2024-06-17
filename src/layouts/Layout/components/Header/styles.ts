import { IActiveble } from "@/common/types/general";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  transition: all 0.4s ease-in-out;
  background-color: ${({ theme }) => theme.colors.main700};
  border-color: ${({ theme }) => theme.colors.main500};
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.flex.between};
  width: 100%;
  height: 100%;
  position: relative;
  gap: 16px;
`;

export const Navigation = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 32px;
  flex-grow: 1;
  height: 100%;
  padding: 10px 0;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  ${({ theme }) => theme.flex.center};
  gap: 4px;
  font-size: 18px;
  font-weight: 600;
  height: 100%;
  margin-right: 6px;
  padding: 12px;
  span {
    border-radius: 4px;
    padding: 4px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.main700};
    background-color: ${({ theme }) => theme.colors.text400};
  }
`;

export const RedirectLink = styled(Link)<IActiveble>`
  color: ${({ theme }) => theme.colors.text300};
  font-size: 16px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -18px;
    left: -4px;
    width: calc(100% + 8px);
    height: 2px;
    background: ${({ theme }) => theme.colors.text300};
    transition: all 0.4s ease-in-out;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }
`;
