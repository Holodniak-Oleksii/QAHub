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

export const ChartContainer = styled.div`
  margin-top: 20px;
  height: 300px;
`;

export const UsersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px;
  max-width: 800px;
`;

export const Th = styled.th`
  border: 1px solid ${({ theme }) => theme.colors.main500};
  background-color: ${({ theme }) => theme.colors.main600};
  padding: 8px;
  text-align: left;
  color: ${({ theme }) => theme.colors.main100};
`;

export const Td = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.main500};
  padding: 8px;
  color: ${({ theme }) => theme.colors.main200};
  text-align: left;
`;
