import { IUser } from "@/common/types";

export const filterObjects = (
  array1: IUser[],
  array2: IUser[],
  key: keyof IUser,
  search: string
): IUser[] => {
  const keysToRemove = new Set(array2.map((obj) => obj[key]));
  const excludedArray = array1.filter((obj) => !keysToRemove.has(obj[key]));
  return excludedArray.filter((item) => item.username.includes(search));
};
