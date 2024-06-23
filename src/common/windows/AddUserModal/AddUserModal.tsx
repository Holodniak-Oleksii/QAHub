/* eslint-disable react-hooks/exhaustive-deps */
import { useGetProjectQuery } from "@/api";
import { MemberSelect } from "@/common/shared";
import { useMembersStore } from "@/common/store/members";
import { IUser } from "@/common/types";
import { firestore } from "@/firebase";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { create, useModal } from "@ebay/nice-modal-react";
import { doc, updateDoc } from "firebase/firestore";
import { useSnackbar } from "notistack";
import { useMemo, useState } from "react";
import { ICreateTaskProps } from "../CreateTaskModal/types";
import { ActionContainer, Title } from "../styles";
import { Container } from "./styles";

const AddUserModal = create<ICreateTaskProps>(({ id, uid }) => {
  const { hide, visible } = useModal(id);

  const { enqueueSnackbar } = useSnackbar();
  const [members, setMembers] = useState<IUser[]>([]);
  const userList = useMembersStore((state) => state.members);
  const { data: project, refetch } = useGetProjectQuery(uid || 0);

  const list = useMemo(
    () =>
      userList.filter(
        (user) => !project?.members.find((member) => member.id === user.id)
      ),
    [userList?.length, project?.members?.length]
  );

  const handlerAdd = async () => {
    try {
      const projectCollectionRef = doc(firestore, "projects", uid || "0");

      await updateDoc(projectCollectionRef, {
        members: [...(project?.members || []), ...members],
      });

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

  return (
    <ModalLayout isOpen={visible} onRequestClose={hide} maxWidth={600}>
      <Container>
        <Title>Join Members</Title>
        <MemberSelect
          members={members}
          onChangeMembers={(value) => setMembers(value)}
          usersList={list}
        />
        <ActionContainer>
          <Button variant="text" onClick={handlerAdd} disabled={!list.length}>
            Confirm
          </Button>
        </ActionContainer>
      </Container>
    </ModalLayout>
  );
});

export default AddUserModal;
