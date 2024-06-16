import styled from "styled-components";

export const Wrapper = styled.header`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1440px) {
    height: 72px;
  }
  @media screen and (max-width: 1024px) {
    height: 64px;
  }
  @media screen and (max-width: 540px) {
    height: 60px;
  }
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
