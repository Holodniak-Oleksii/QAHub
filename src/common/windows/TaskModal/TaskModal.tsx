import { create, useModal } from "@ebay/nice-modal-react";

import { Avatar } from "@/common/shared";
import { ModalLayout } from "@/layouts";
import {
  Bar,
  Cell,
  Container,
  Description,
  Estimated,
  Grid,
  Head,
  Priority,
  Property,
  Title,
  Wrapper,
} from "./styles";
import { ITaskModalProps } from "./types";

const TaskModal = create<ITaskModalProps>(({ id, task }) => {
  const { hide, visible } = useModal(id);

  return (
    <ModalLayout isOpen={visible} onRequestClose={hide}>
      <Wrapper>
        <Container>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
        </Container>
        <Bar>
          <Head />
          <Grid>
            <Property>Assignee</Property>
            <Cell>
              <Avatar name={task.performer.username} />
            </Cell>
            <Property>Priority</Property>
            <Cell>
              <Priority priority={task.priority}>{task.priority}</Priority>
            </Cell>
            <Property>Estimate</Property>
            <Cell>
              <Estimated>{task.estimated}</Estimated>
            </Cell>
            <Property>Created at</Property>
            <Cell>
              <Property>{task.createdAt}</Property>
            </Cell>
          </Grid>
        </Bar>
      </Wrapper>
    </ModalLayout>
  );
});

export default TaskModal;
