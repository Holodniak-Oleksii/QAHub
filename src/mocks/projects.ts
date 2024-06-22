import { EStatus } from "@/common/enums";
import { IProject, ITask, IUser } from "@/common/types";

export const mockUsers: IUser[] = [
  {
    id: "1",
    positions: "QA Engineer",
    projects: ["1"],
    username: "Elon Mask",
  },
  {
    id: "2",
    positions: "QA Engineer",
    projects: ["2"],
    username: "Elon Tasl",
  },
  {
    id: "3",
    positions: "QA Engineer",
    projects: ["3"],
    username: "Elon Ostrovskui",
  },
];

export const mockTasks: ITask[] = [
  {
    id: "1",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    title: "Task 1",
    estimated: 2,
    priority: "middle",
    projectId: "1",
    status: EStatus.DONE,
    createdAt: new Date(),
    performer: mockUsers[0],
  },
  {
    id: "2",
    description: "Task 2",
    title: "Task 2",
    estimated: 2,
    priority: "highest",
    projectId: "1",
    status: EStatus["IN PROGRESS"],
    createdAt: new Date(),
    performer: mockUsers[0],
  },
  {
    id: "3",
    description: "Task 3",
    title: "Task 3",
    estimated: 4,
    priority: "low",
    projectId: "1",
    status: EStatus["IN PROGRESS"],
    createdAt: new Date(),
    performer: mockUsers[0],
  },
];

export const mockProjects: IProject[] = [
  {
    id: "1",
    name: "SpaceX",
    members: mockUsers,
    tasks: mockTasks,
    joinCode: "DNEUOHDI",
    ownerId: "1",
  },
  {
    id: "2",
    name: "SpaceY",
    members: mockUsers,
    tasks: mockTasks,
    joinCode: "JVKJVDVDV",
    ownerId: "1",
  },
  {
    id: "3",
    name: "SPinner",
    members: mockUsers,
    tasks: mockTasks,
    joinCode: "DWDFFELKF",
    ownerId: "2",
  },
  {
    id: "4",
    name: "Tesla",
    members: mockUsers,
    tasks: mockTasks,
    joinCode: "FEGSGRHNN",
    ownerId: "3",
  },

  {
    id: "5",
    name: "SpaceX",
    members: mockUsers,
    tasks: mockTasks,
    joinCode: "DNEUOHDI",
    ownerId: "1",
  },
  {
    id: "6",
    name: "SpaceY",
    members: mockUsers,
    tasks: mockTasks,
    joinCode: "JVKJVDVDV",
    ownerId: "1",
  },
  {
    id: "7",
    name: "SPinner",
    members: mockUsers,
    tasks: mockTasks,
    joinCode: "DWDFFELKF",
    ownerId: "2",
  },
  {
    id: "8",
    name: "Tesla",
    members: mockUsers,
    tasks: mockTasks,
    joinCode: "FEGSGRHNN",
    ownerId: "3",
  },
];
