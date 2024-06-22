import { EPriority, EStatus } from "@/common/enums";
import { IModalProps, IOption } from "@/common/types/general";
import { ModalLayout } from "@/layouts";
import { mockUsers } from "@/mocks";
import { Button } from "@/ui-liberty/buttons";
import { Input, Select, TextArea } from "@/ui-liberty/inputs";
import { create, useModal } from "@ebay/nice-modal-react";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActionContainer, Form } from "./styles";
import { ICreateTaskFormFields } from "./types";

const CreateTaskModal = create<IModalProps>(({ id }) => {
  const { hide, visible } = useModal(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTaskFormFields>({ mode: "onSubmit" });
  const [statusesOptions] = useState<IOption[]>(
    Object.keys(EStatus).map((value, id) => ({ id, value, label: value }))
  );
  const [priorityOptions] = useState<IOption[]>(
    Object.keys(EPriority).map((value, id) => ({ id, value, label: value }))
  );

  const [performerOptions] = useState<IOption[]>(
    mockUsers.map((value, id) => ({
      id,
      value: value.username,
      label: value.username,
    }))
  );

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data: ICreateTaskFormFields) => {
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
