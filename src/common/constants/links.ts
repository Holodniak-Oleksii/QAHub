import { TID } from "../types";

export const LINK_TEMPLATES = {
  PROJECTS: () => "/",
  REPORTS: () => "/reports",
  BOARD: (id: TID) => `/board/${id}`,
  SIGN_IN: () => "/sign-in",
  SIGN_UP: () => "/sign-up",
  PROFILE: (username: string) => `/profile/${username}`,
};
