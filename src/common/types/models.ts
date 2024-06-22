import { EStatus } from "../enums";

export type TID = number | string;
export type TPriority = "low" | "middle" | "high" | "highest";

export interface IUser {
  id: TID;
  username: string;
  positions: string;
  projects: TID[];
}

export interface ITask {
  id: TID;
  title: string;
  description: string;
  status: EStatus;
  projectId: TID;
  createdAt: Date;
  priority: TPriority;
  estimated: number;
  performer: IUser;
}

export interface IProject {
  id: TID;
  name: string;
  members: IUser[];
  tasks: ITask[];
  ownerId: TID;
}
