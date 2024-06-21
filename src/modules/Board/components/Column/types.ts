import { ITask } from "@/common/types";
import { DroppableProvidedProps } from "react-beautiful-dnd";

export interface IColumnProps {
  title: string;
  tasks: ITask[];
  id: string;
}

export interface IListProps extends DroppableProvidedProps {
  isDraggingOver: boolean;
}
