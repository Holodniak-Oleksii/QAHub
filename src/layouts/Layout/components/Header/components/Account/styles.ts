import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flex.center};
  gap: 16px;
`;

export const Icon = styled.button`
  padding: 4px;
`;
