import { IModalProps, ITask } from "@/common/types";

export interface ICreateTaskFormFields
  extends Pick<
    ITask,
    "description" | "estimated" | "priority" | "status" | "title"
  > {
  performerUsername: string;
}

export interface ICreateTaskProps extends IModalProps {
  uid: string;
}
