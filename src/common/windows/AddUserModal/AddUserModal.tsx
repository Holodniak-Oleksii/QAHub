import { useGetProjectQuery } from "@/api";
import { MemberSelect } from "@/common/shared";
import { useMembersStore } from "@/common/store/members";
import { IUser } from "@/common/types";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { create, useModal } from "@ebay/nice-modal-react";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { ICreateTaskProps } from "../CreateTaskModal/types";
import { ActionContainer, Title } from "../styles";
import { Container } from "./styles";

const AddUserModal = create<ICreateTaskProps>(({ id, uid }) => {
  const { hide, visible } = useModal(id);

  const { enqueueSnackbar } = useSnackbar();
  const [members, setMembers] = useState<IUser[]>([]);
  const userList = useMembersStore((state) => state.members);
  const { data: project, refetch } = useGetProjectQuery(uid || 0);

  const handlerAdd = async () => {
    try {
      // const response = await mutateAsync(data);

      enqueueSnackbar("Success", {
        variant: "success",
      });
      refetch();
      hide();
    } catch (e) {
      enqueueSnackbar("Something went wrong", {
        variant: "warning",
      });
    }
  };

  console.log(
    userList.filter(
      (user) => !project?.members.find((member) => member.id === user.id)
    )
  );
  return (
    <ModalLayout isOpen={visible} onRequestClose={hide} maxWidth={600}>
      <Container>
        <Title>Join Members</Title>
        <MemberSelect
          members={members}
          onChangeMembers={(value) => setMembers(value)}
          usersList={userList.filter(
            (user) => !project?.members.find((member) => member.id === user.id)
          )}
        />
        <ActionContainer>
          <Button variant="text" onClick={handlerAdd}>
            Confirm
          </Button>
        </ActionContainer>
      </Container>
    </ModalLayout>
  );
});

export default AddUserModal;
