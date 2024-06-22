import { IUser } from "@/common/types";

export interface IUserProps {
  user: IUser | null;
  isAuth: boolean;
}

export interface IUserStoreProps extends IUserProps {
  updateUser: (user: IUser | null) => void;
}
