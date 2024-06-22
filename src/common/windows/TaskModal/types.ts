import { ITask } from "@/common/types";
import { IModalProps } from "@/common/types/general";

export interface ITaskModalProps extends IModalProps {
  task: ITask;
}
