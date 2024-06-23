import { IModalProps } from "@/common/types";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { create, useModal } from "@ebay/nice-modal-react";
import { useSnackbar } from "notistack";
import { ActionContainer, Title } from "../styles";
import { Container } from "./styles";

const AddUserModal = create<IModalProps>(({ id }) => {
  const { hide, visible } = useModal(id);

  const { enqueueSnackbar } = useSnackbar();
  // const [members, setMembers] = useState<IUser[]>([]);

  const handlerAdd = async () => {
    try {
      // const response = await mutateAsync(data);

      enqueueSnackbar("Success", {
        variant: "success",
      });
      // push(LINK_TEMPLATES.PROFILE(user.username));
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
        {/* <MemberSelect
          members={members}
          onChangeMembers={(value) => setMembers(value)}
          usersList={mockUsers}
        /> */}
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
