import { StoreApi, UseBoundStore } from "zustand";

export type TZustandHookSelectors<StateType> = {
  [Key in keyof StateType as `use${Capitalize<
    string & Key
  >}`]: () => StateType[Key];
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function createSelectorHooks<StateType extends object>(
  store: UseBoundStore<StoreApi<StateType>>
) {
  const storeIn = store as any;

  Object.keys(storeIn.getState()).forEach((key) => {
    const selector = (state: StateType) => state[key as keyof StateType];
    storeIn[`use${capitalize(key)}`] = () => storeIn(selector);
  });

  return storeIn as UseBoundStore<StoreApi<StateType>> &
    TZustandHookSelectors<StateType>;
}

export interface ZustandFuncSelectors<StateType> {
  use: {
    [key in keyof StateType]: () => StateType[key];
  };
}

export function createSelectorFunctions<StateType extends object>(
  store: UseBoundStore<StoreApi<StateType>>
) {
  const storeIn = store as any;

  storeIn.use = {};

  Object.keys(storeIn.getState()).forEach((key) => {
    const selector = (state: StateType) => state[key as keyof StateType];
    storeIn.use[key] = () => storeIn(selector);
  });

  return store as UseBoundStore<StoreApi<StateType>> &
    ZustandFuncSelectors<StateType>;
}
