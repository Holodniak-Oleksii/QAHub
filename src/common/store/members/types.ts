import { IUser } from "@/common/types";

export interface IMembersProps {
  members: IUser[];
}

export interface IMembersStoreProps extends IMembersProps {
  updateMembers: (user: IUser[]) => void;
}
