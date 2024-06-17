import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.main700};
  * {
    font-family: "Roboto", sans-serif;
  }
`;
