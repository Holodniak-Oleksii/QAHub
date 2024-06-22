import NiceModal from "@ebay/nice-modal-react";
import { EModal } from "../enums";
import AddUserModal from "./AddUserModal/AddUserModal";
import CreateProjectModal from "./CreateProjectModal/CreateProjectModal";
import CreateTaskModal from "./CreateTaskModal/CreateTaskModal";
import LoginModal from "./LoginModal/LoginModal";
import RegistrationModal from "./RegistrationModal/RegistrationModal";
import TaskModal from "./TaskModal/TaskModal";

const {
  TASK_MODAL,
  CREATE_PROJECT_MODAL,
  CREATE_TASK_MODAL,
  LOGIN_MODAL,
  REGISTRATION_MODAL,
  ADD_MEMBERS_MODAL,
} = EModal;

NiceModal.register(TASK_MODAL, TaskModal);
NiceModal.register(ADD_MEMBERS_MODAL, AddUserModal);
NiceModal.register(REGISTRATION_MODAL, RegistrationModal);
NiceModal.register(LOGIN_MODAL, LoginModal);
NiceModal.register(CREATE_TASK_MODAL, CreateTaskModal);
NiceModal.register(CREATE_PROJECT_MODAL, CreateProjectModal);
