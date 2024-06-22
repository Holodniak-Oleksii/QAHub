import { EStatus } from "@/common/enums";
import { ITask } from "@/common/types";

export interface IBoardCardProps {
  task: ITask;
  index: number;
}

export interface IWrapperProps {
  isDragging: boolean;
  status: EStatus;
}
