import { EModal } from "@/common/enums";
import { PlusIcon, UserPlusIcon } from "@/common/icons";
import { Avatar } from "@/common/shared";
import { mockUsers } from "@/mocks";
import { Button } from "@/ui-liberty/buttons";
import { useModal } from "@ebay/nice-modal-react";
import { useLocation } from "react-router-dom";
import { Container, Icon } from "./styles";

const Account = () => {
  const user = mockUsers[0];
  const isAuth = true;
  const { pathname } = useLocation();
  const { show: showCreateTaskModal } = useModal(EModal.CREATE_TASK_MODAL);
  const { show: showLoginModal } = useModal(EModal.LOGIN_MODAL);
  const { show: showRegistrationModal } = useModal(EModal.REGISTRATION_MODAL);
  const { show: showAddMembersModal } = useModal(EModal.ADD_MEMBERS_MODAL);

  return (
    <Container>
      {isAuth ? (
        <>
          {pathname.includes("board") && (
            <>
              <Icon onClick={() => showCreateTaskModal()}>
                <PlusIcon />
              </Icon>
              <Icon onClick={() => showAddMembersModal()}>
                <UserPlusIcon />
              </Icon>
            </>
          )}
          <Avatar name={user.username} />
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
