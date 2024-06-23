import { LINK_TEMPLATES } from "@/common/constants";
import { EModal } from "@/common/enums";
import { LogoutIcon, PlusIcon, UserPlusIcon } from "@/common/icons";
import { Avatar } from "@/common/shared";
import { useUserStore } from "@/common/store/user";
import { auth } from "@/firebase";
import { Button } from "@/ui-liberty/buttons";
import { useModal } from "@ebay/nice-modal-react";
import { signOut } from "firebase/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, Icon } from "./styles";

const Account = () => {
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const isAuth = useUserStore((state) => state.isAuth);

  const push = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();
  const { show: showCreateTaskModal } = useModal(EModal.CREATE_TASK_MODAL);
  const { show: showLoginModal } = useModal(EModal.LOGIN_MODAL);
  const { show: showRegistrationModal } = useModal(EModal.REGISTRATION_MODAL);
  const { show: showAddMembersModal } = useModal(EModal.ADD_MEMBERS_MODAL);

  const handlerLogout = () => {
    signOut(auth);
    updateUser(null);
    push(LINK_TEMPLATES.PROJECTS());
  };

  return (
    <Container>
      {isAuth ? (
        <>
          {pathname.includes("board") && (
            <>
              <Icon onClick={() => showCreateTaskModal({ uid: id })}>
                <PlusIcon />
              </Icon>
              <Icon onClick={() => showAddMembersModal()}>
                <UserPlusIcon />
              </Icon>
            </>
          )}
          <Avatar name={user?.username} />
          <Icon onClick={handlerLogout}>
            <LogoutIcon />
          </Icon>
        </>
      ) : (
        <>
          <Button variant="contained" onClick={() => showLoginModal()}>
            Sign in
          </Button>
          <Button variant="text" onClick={() => showRegistrationModal()}>
            Sign up
          </Button>
        </>
      )}
    </Container>
  );
};

export default Account;
