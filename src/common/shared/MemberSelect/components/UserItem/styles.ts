import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  ${({ theme }) => theme.flex.row};
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.colors.main400};
  gap: 8px;
  border-radius: 4px;
  .avatar {
    width: 20px;
    height: 20px;
    font-size: 8px;
  }
`;

export const Name = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.main200};
`;

export const Icon = styled.button`
  ${({ theme }) => theme.flex.center};
  background-color: ${({ theme }) => theme.colors.main500};
  padding: 2px;
  flex-shrink: 1;
  transform: rotate(45deg);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform-origin: center;
`;
