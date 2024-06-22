import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { IUserProps, IUserStoreProps } from "./types";

const initialState: IUserProps = {
  isAuth: false,
  user: null,
};

export const useUserStore = create<IUserStoreProps>()(
  immer((set) => ({
    ...initialState,
    updateUser: (user) =>
      set((state) => {
        state.user = user;
        state.isAuth = !!user?.id;
      }),
  }))
);
