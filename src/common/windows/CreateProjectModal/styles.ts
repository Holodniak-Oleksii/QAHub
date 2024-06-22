import styled from "styled-components";

export const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  width: 100%;
`;

export const ActionContainer = styled.div`
  width: fit-content;
  margin-top: 16px;
`;
