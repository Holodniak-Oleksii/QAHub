import { IProject } from "@/common/types";

export interface ICreateProjectFormFields extends Pick<IProject, "name"> {}
