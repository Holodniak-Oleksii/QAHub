import styled from "styled-components";

export const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 1;
  border: 2px solid ${({ theme }) => theme.colors.text500};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  background-color: ${({ theme }) => theme.colors.text600};
  border-radius: 50%;
  padding: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.main0};
  ${({ theme }) => theme.flex.center}
  text-transform: uppercase;
`;
