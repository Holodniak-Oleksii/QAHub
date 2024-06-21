import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.content.headerSpace}
  ${({ theme }) => theme.flex.column};
  gap: 32px;
`;

export const Head = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 18px;
  padding-top: 12px;
  a {
    color: ${({ theme }) => theme.colors.text300};
  }
`;

export const Separate = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.main500};
`;

export const Container = styled.div`
  ${({ theme }) => theme.content.mainContainerWidth};
  ${({ theme }) => theme.content.mainContainerPadding};
  height: 100%;
`;

export const List = styled.div`
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.flex.row};
  gap: 16px;
`;
