import { BoardCard } from "@/common/shared";
import { FC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { List, Title, Wrapper } from "./styles";
import { IColumnProps } from "./types";

const Column: FC<IColumnProps> = ({ id, tasks, title }) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <Wrapper>
          <Title>{title}</Title>
          <List
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <BoardCard index={index} task={task} key={index} />
            ))}
            {provided.placeholder}
          </List>
        </Wrapper>
      )}
    </Droppable>
  );
};

export default Column;
