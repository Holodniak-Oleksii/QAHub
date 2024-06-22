import { EModal } from "@/common/enums";
import { IModalProps } from "@/common/types";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { create, useModal } from "@ebay/nice-modal-react";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { ActionContainer, Form, Title } from "../styles";
import { IRegistrationFormFields } from "./types";

const RegistrationModal = create<IModalProps>(({ id }) => {
  const { hide, visible } = useModal(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationFormFields>({ mode: "onSubmit" });
  const { show: showLoginModal } = useModal(EModal.LOGIN_MODAL);
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data: IRegistrationFormFields) => {
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
      <Title>Sing up</Title>
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
            minLength: 6,
          })}
          error={errors.password}
        />

        <Input
          label={"Confirm password "}
          placeholder={"Enter confirm password"}
          {...register("passwordConfirmation", {
            required: true,
            minLength: 6,
          })}
          error={errors.passwordConfirmation}
        />
        <ActionContainer>
          <Button variant="text" fullWidth type={"submit"}>
            Sign up
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              hide();
              showLoginModal();
            }}
          >
            Sign in
          </Button>
        </ActionContainer>
      </Form>
    </ModalLayout>
  );
});

export default RegistrationModal;
