import { IUser } from "@/common/types";

export interface IMembersSelectProps {
  usersList: IUser[];
  members: IUser[];
  onChangeMembers: (member: IUser[]) => void;
}
