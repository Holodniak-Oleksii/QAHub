import { getUserById } from "@/api";
import { EModal } from "@/common/enums";
import { useUserStore } from "@/common/store/user";
import { IModalProps } from "@/common/types";
import { auth } from "@/firebase";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { create, useModal } from "@ebay/nice-modal-react";
import { signInWithEmailAndPassword } from "firebase/auth";
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

  const updateUser = useUserStore((state) => state.updateUser);
  const { enqueueSnackbar } = useSnackbar();
  const { show: showRegistrationModal } = useModal(EModal.REGISTRATION_MODAL);

  const onSubmit = async (data: ILoginFormFields) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const profile = await getUserById(user.uid);

      updateUser(profile);

      enqueueSnackbar("Success", {
        variant: "success",
      });

      hide();
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
          label={"Email"}
          placeholder={"Enter email"}
          {...register("email", {
            required: true,
          })}
          error={errors.email}
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
