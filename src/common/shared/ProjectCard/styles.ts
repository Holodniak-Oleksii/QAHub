import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  padding: 16px 0 16px 16px;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.main600};
  box-shadow: ${({ theme }) => theme.boxShadow.xs};
  ${({ theme }) => theme.flex.column};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 36px;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.main500};
  }
  @media (hover: hover) {
    &:hover {
      box-shadow: ${({ theme }) => theme.boxShadow.lg};
      transform: scale(1.02);
    }
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const Head = styled.div`
  ${({ theme }) => theme.flex.row}
  width: 100%;
  position: relative;
  z-index: 1;
  gap: 12px;
  padding-right: 16px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  ${({ theme }) => theme.flex.center};
  background-color: ${({ theme }) => theme.colors.text500};
  color: ${({ theme }) => theme.colors.main900};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Title = styled.div`
  width: calc(100% - 52px);
  font-size: 14px;
  ${({ theme }) => theme.text.getLineClamp(2)}
  color: ${({ theme }) => theme.colors.main0};
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 16px 12px 0 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.main500};

  ${({ theme }) => theme.flex.column};
  gap: 8px;
`;

export const Row = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.main300};
  ${({ theme }) => theme.flex.between}
  span {
    ${({ theme }) => theme.flex.center}
    color: ${({ theme }) => theme.colors.main100};
    width: auto;
    height: 16px;
    aspect-ratio: 1 / 1;
    padding: 4px;
    font-size: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.main500};
  }
`;

export const OwnerPlug = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.text500};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2px;
  transform-origin: center;
  transform: rotate(45deg) translate(0, -50px);
  svg {
    transform: rotate(-45deg);
  }
`;
