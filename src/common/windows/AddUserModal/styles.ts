import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 20px;
  width: 100%;
`;
