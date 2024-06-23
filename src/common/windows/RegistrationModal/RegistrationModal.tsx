import { EModal } from "@/common/enums";
import { useUserStore } from "@/common/store/user";
import { IModalProps } from "@/common/types";
import { auth, firestore } from "@/firebase";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { create, useModal } from "@ebay/nice-modal-react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
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
  const updateUser = useUserStore((state) => state.updateUser);

  const onSubmit = async (data: IRegistrationFormFields) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, { displayName: data.username });

      const usersCollectionRef = collection(firestore, "users");

      const profile = {
        id: user.uid,
        username: data.username,
        positions: data.position,
        projects: [],
      };
      await addDoc(usersCollectionRef, profile);

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
          label={"Email"}
          placeholder={"Enter email"}
          {...register("email", {
            required: true,
          })}
          error={errors.email}
        />

        <Input
          label={"Position"}
          placeholder={"Enter position"}
          {...register("position", {
            required: true,
          })}
          error={errors.position}
        />

        <Input
          label={"Password"}
          placeholder={"Enter password"}
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          type="password"
          error={errors.password}
        />

        <Input
          type="password"
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
