import styled from "styled-components";
import { IListProps } from "./types";

export const Wrapper = styled.div`
  width: 300px;
  min-height: calc(100% - 24px);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.main600};
`;

export const Title = styled.div`
  ${({ theme }) => theme.flex.center};
  height: 60px;
  color: ${({ theme }) => theme.colors.main0};
`;

export const List = styled.div<IListProps>`
  ${({ theme }) => theme.flex.column};
  gap: 8px;
  padding: 0 8px;
`;
