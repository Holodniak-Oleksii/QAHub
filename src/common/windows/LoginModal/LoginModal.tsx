import { EModal } from "@/common/enums";
import { IModalProps } from "@/common/types";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { create, useModal } from "@ebay/nice-modal-react";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { ActionContainer, Form, Title } from "../styles";
import { ILoginFormFields } from "./types";

const LoginModal = create<IModalProps>(({ id }) => {
  const { hide, visible } = useModal(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormFields>({ mode: "onSubmit" });

  const { enqueueSnackbar } = useSnackbar();
  const { show: showRegistrationModal } = useModal(EModal.REGISTRATION_MODAL);

  const onSubmit = async (data: ILoginFormFields) => {
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
    <ModalLayout isOpen={visible} onRequestClose={hide} maxWidth={400}>
      <Title>Sing in</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"Username"}
          placeholder={"Enter username"}
          {...register("username", {
            required: true,
          })}
          error={errors.username}
        />

        <Input
          label={"Password"}
          placeholder={"Enter password"}
          {...register("password", {
            required: true,
          })}
          error={errors.password}
        />
        <ActionContainer>
          <Button variant="text" fullWidth type={"submit"}>
            Sign in
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              hide();
              showRegistrationModal();
            }}
          >
            Sign up
          </Button>
        </ActionContainer>
      </Form>
    </ModalLayout>
  );
});
export default LoginModal;
