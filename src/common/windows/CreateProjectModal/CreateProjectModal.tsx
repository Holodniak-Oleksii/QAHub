import { MemberSelect } from "@/common/shared";
import { IUser } from "@/common/types";
import { IModalProps } from "@/common/types/general";
import { ModalLayout } from "@/layouts";
import { mockUsers } from "@/mocks";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { create, useModal } from "@ebay/nice-modal-react";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActionContainer, Form } from "./styles";
import { ICreateProjectFormFields } from "./types";

const CreateProjectModal = create<IModalProps>(({ id }) => {
  const { hide, visible } = useModal(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProjectFormFields>({ mode: "onSubmit" });
  const { enqueueSnackbar } = useSnackbar();
  const [members, setMembers] = useState<IUser[]>([]);

  const onSubmit = async (data: ICreateProjectFormFields) => {
    console.log("data :", data);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"Project name"}
          placeholder={"Enter project name"}
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
          error={errors.name}
        />
        <MemberSelect
          members={members}
          onChangeMembers={(value) => setMembers(value)}
          usersList={mockUsers}
        />
        <ActionContainer>
          <Button variant="text" type={"submit"}>
            Create
          </Button>
        </ActionContainer>
      </Form>
    </ModalLayout>
  );
});

export default CreateProjectModal;
