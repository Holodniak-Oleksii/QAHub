import styled from "styled-components";

export const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  width: 100%;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.main0};
`;

export const ActionContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  ${({ theme }) => theme.flex.column};
  gap: 8px;
`;
