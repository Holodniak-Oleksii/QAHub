import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { IMembersProps, IMembersStoreProps } from "./types";

const initialState: IMembersProps = {
  members: [],
};

export const useMembersStore = create<IMembersStoreProps>()(
  immer((set) => ({
    ...initialState,
    updateMembers: (members) =>
      set((state) => {
        state.members = members;
      }),
  }))
);
