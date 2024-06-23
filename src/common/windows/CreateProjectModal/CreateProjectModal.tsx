import { useGetProjectsQuery } from "@/api";
import { MemberSelect } from "@/common/shared";
import { useMembersStore } from "@/common/store/members";
import { useUserStore } from "@/common/store/user";
import { IProject, IUser } from "@/common/types";
import { IModalProps } from "@/common/types/general";
import { firestore } from "@/firebase";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { Input } from "@/ui-liberty/inputs";
import { create, useModal } from "@ebay/nice-modal-react";
import { addDoc, collection, updateDoc } from "firebase/firestore";
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
  const user = useUserStore((state) => state.user);
  const userList = useMembersStore((state) => state.members);
  const { refetch } = useGetProjectsQuery(user?.id || 0);

  const onSubmit = async (data: ICreateProjectFormFields) => {
    if (!user) {
      return;
    }
    try {
      const projectsCollectionRef = collection(firestore, "projects");

      const project: Omit<IProject, "id"> = {
        members,
        ownerId: user.id,
        name: data.name,
        tasks: [],
      };
      const docRef = await addDoc(projectsCollectionRef, project);

      const generatedId = docRef.id;

      await updateDoc(docRef, {
        id: generatedId,
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
          usersList={userList}
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
