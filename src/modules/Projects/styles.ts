import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.content.headerSpace};
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => theme.content.mainContainerPadding};
  ${({ theme }) => theme.content.mainContainerWidth};
  width: 100%;
  height: 100%;
  position: relative;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 28px;
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.main0};
`;

export const Separate = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.main500};
`;

export const Grid = styled.div`
  padding-top: 32px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(6, calc(100% / 6 - 16px));
`;

export const CreateProject = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  padding: 16px;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.main600};
  box-shadow: ${({ theme }) => theme.boxShadow.xs};
  ${({ theme }) => theme.flex.center};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  @media (hover: hover) {
    &:hover {
      box-shadow: ${({ theme }) => theme.boxShadow.lg};
      transform: scale(1.02);
    }
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const IconButton = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  ${({ theme }) => theme.flex.center};
  border: 1px solid ${({ theme }) => theme.colors.main400};
`;
