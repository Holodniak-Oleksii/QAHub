import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import Avatar from "../Avatar/Avatar";
import { Estimated, Info, Priority, Title, Wrapper } from "./styles";
import { IBoardCardProps } from "./types";

const BoardCard: FC<IBoardCardProps> = ({ task, index }) => {
  return (
    <Draggable
      draggableId={task.id.toString()}
      key={task.id.toString()}
      index={index}
    >
      {(provided, snapshot) => (
        <Wrapper
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Title>{task.title}</Title>
          <Info>
            <Estimated>
              <Priority priority={task.priority}>{task.priority}</Priority>
              <span>{task.estimated}</span>
            </Estimated>
            <Avatar name={task.performer.username} />
          </Info>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default BoardCard;
