import styled, { keyframes } from "styled-components";
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;
  ${({ theme }) => theme.flex.center};
  background-color: ${({ theme }) => theme.colors.main500};
`;

const bounce = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

export const SpinnerWrapper = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  margin: 100px auto;
`;

export const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: -1s;
  }
`;
