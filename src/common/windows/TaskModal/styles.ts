import { TPriority } from "@/common/types";
import { theme } from "@/theme/theme";
import styled from "styled-components";

export const priorityColor: Record<TPriority, string> = {
  high: theme.colors.error300,
  highest: theme.colors.error600,
  middle: theme.colors.text500,
  low: theme.colors.gray400,
};

export const Priority = styled.div<{ priority: TPriority }>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.main0};
  padding: 4px 6px;
  margin-right: auto;
  border-radius: 2px;
  background-color: ${({ priority }) => priorityColor[priority]};
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.row};
  align-items: stretch;
  gap: 24px;
`;

export const Container = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  flex-grow: 1;
`;

export const Bar = styled.div`
  width: 300px;
  min-height: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.main400};
  flex-shrink: 0;
  border-radius: 4px;
  ${({ theme }) => theme.flex.column};
  overflow: hidden;
  gap: 12px;
`;

export const Head = styled.div`
  background-color: ${({ theme }) => theme.colors.main500};
  height: 40px;
  width: 100%;
  ${({ theme }) => theme.flex.center};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 24px;
  line-height: 1.5;
  font-weight: 600;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.main100};
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  width: 100%;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  padding: 0px 12px 12px 12px;
  grid-gap: 24px;
`;

export const Label = styled(Description)`
  color: ${({ theme }) => theme.colors.main0};
  font-size: 18px;
  text-align: center;
  font-weight: 300;
`;

export const Property = styled(Label)`
  text-align: left;
  font-size: 14px;
  height: 100%;
  ${({ theme }) => theme.flex.row};
`;

export const Cell = styled.div`
  ${({ theme }) => theme.flex.row};
`;

export const Estimated = styled.div`
  font-size: 10px;
  ${({ theme }) => theme.flex.center};
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.main0};
  background-color: ${({ theme }) => theme.colors.main500};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  flex-shrink: 1;
`;
