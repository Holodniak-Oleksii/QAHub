import { EStatus } from "@/common/enums";
import { TPriority } from "@/common/types";
import { theme } from "@/theme/theme";
import styled from "styled-components";
import { IWrapperProps } from "./types";

export const priorityColor: Record<TPriority, string> = {
  high: theme.colors.error300,
  highest: theme.colors.error600,
  middle: theme.colors.text500,
  low: theme.colors.gray400,
};

const statusColor: Record<EStatus, string> = {
  [EStatus.DONE]: theme.colors.success900,
  [EStatus.BACKLOG]: theme.colors.main500,
  [EStatus.BLOCKED]: theme.colors.main500,
  [EStatus["IN PROGRESS"]]: theme.colors.main500,
  [EStatus.TODO]: theme.colors.main500,
};

export const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  height: fit-content;
  border-radius: 4px;
  padding: 16px;
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  transition: all 0.3s ease;
  background-color: ${({ isDragging, theme, status }) =>
    isDragging ? theme.colors.main400 : statusColor[status]};
  opacity: ${({ status }) => (status === EStatus.BACKLOG ? 0.5 : 1)};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.main200};
  font-size: 16px;
  line-height: 1.4;
  width: 100%;
`;

export const Info = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.row};
  justify-content: flex-end;
  gap: 16px;
`;

export const Priority = styled.div<{ priority: TPriority }>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.main0};
  padding: 4px 6px;
  margin-right: auto;
  border-radius: 2px;
  background-color: ${({ priority }) => priorityColor[priority]};
  text-transform: uppercase;
`;

export const Estimated = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.main100};
  margin-right: auto;
  ${({ theme }) => theme.flex.row};
  gap: 8px;
  span {
    font-size: 10px;
    ${({ theme }) => theme.flex.center};
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.main0};
    background-color: ${({ theme }) => theme.colors.main600};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    flex-shrink: 1;
  }
`;
