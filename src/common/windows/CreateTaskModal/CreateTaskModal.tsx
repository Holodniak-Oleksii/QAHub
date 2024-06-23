import { useGetProjectQuery } from "@/api";
import { EPriority, EStatus } from "@/common/enums";
import { useMembersStore } from "@/common/store/members";
import { IOption } from "@/common/types/general";
import { firestore } from "@/firebase";
import { ModalLayout } from "@/layouts";
import { Button } from "@/ui-liberty/buttons";
import { Input, Select, TextArea } from "@/ui-liberty/inputs";
import { create, useModal } from "@ebay/nice-modal-react";
import { doc, updateDoc } from "firebase/firestore";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActionContainer, Form } from "./styles";
import { ICreateTaskFormFields, ICreateTaskProps } from "./types";

const CreateTaskModal = create<ICreateTaskProps>(({ id, uid }) => {
  const { hide, visible } = useModal(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTaskFormFields>({ mode: "onSubmit" });

  const { data: project, refetch } = useGetProjectQuery(uid || 0);
  const members = useMembersStore((state) => state.members);

  const [statusesOptions] = useState<IOption[]>(
    Object.keys(EStatus).map((value, id) => ({ id, value, label: value }))
  );
  const [priorityOptions] = useState<IOption[]>(
    Object.keys(EPriority).map((value, id) => ({ id, value, label: value }))
  );

  const [performerOptions] = useState<IOption[]>(
    members.map((value, id) => ({
      id,
      value: value.username,
      label: value.username,
    }))
  );

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data: ICreateTaskFormFields) => {
    console.log("data :", data);

    try {
      const chooseUser = members.find(
        (user) => user.username === data.performerUsername
      );

      const projectCollectionRef = doc(firestore, "projects", uid || "0");

      await updateDoc(projectCollectionRef, {
        tasks: [
          ...(project?.tasks || []),
          {
            id: (project?.tasks.length || 0) + 1,
            title: data.title,
            description: data.description,
            priority: data.priority,
            estimated: data.estimated,
            createdAt: new Date(Date.now()).toLocaleString(),
            status: data.status,
            performer: chooseUser,
          },
        ],
      });

      enqueueSnackbar("Success", {
        variant: "success",
      });

      refetch();
      hide();
    } catch (e) {
      console.log("e :", e);
      enqueueSnackbar("Something went wrong", {
        variant: "warning",
      });
    }
  };

  return (
    <ModalLayout isOpen={visible} onRequestClose={hide} maxWidth={600}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"Title"}
          placeholder={"Enter title"}
          {...register("title", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
          error={errors.title}
        />

        <Input
          label={"Estimate"}
          placeholder={"Enter estimate"}
          type="number"
          {...register("estimated", {
            required: true,
            min: 1,
          })}
          error={errors.estimated}
        />
        <Select
          options={statusesOptions}
          label="Choose status"
          placeholder="Choose status"
          registerOptions={{
            ...register("status", {
              required: true,
            }),
          }}
          error={errors.status}
        />
        <Select
          options={priorityOptions}
          label="Choose priority"
          placeholder="Choose priority"
          registerOptions={{
            ...register("priority", {
              required: true,
            }),
          }}
          error={errors.priority}
        />

        <Select
          options={performerOptions}
          label="Choose Performer"
          placeholder="Choose Performer"
          registerOptions={{
            ...register("performerUsername", {
              required: true,
            }),
          }}
          error={errors.performerUsername}
        />
        <TextArea
          label={"Description"}
          placeholder={"Enter description"}
          customHeight={100}
          {...register("description", {
            required: true,
          })}
          error={errors.description}
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

export default CreateTaskModal;
