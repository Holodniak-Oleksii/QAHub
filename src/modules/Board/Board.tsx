import { LINK_TEMPLATES } from "@/common/constants";
import { STATUS } from "@/common/enums";
import { ITask } from "@/common/types";
import { mockProjects } from "@/mocks";
import { useState } from "react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { Column } from "./components";
import { Container, Head, List, Separate, Title, Wrapper } from "./styles";

const Board = () => {
  const project = mockProjects[0];

  const [tasks, setTasks] = useState(project.tasks);

  const renderColumns = () => {
    return Object.keys(STATUS).map((value) => {
      const items = tasks.filter((item) => item.status === value);
      return <Column id={value} title={value} tasks={items} key={value} />;
    });
  };

  const handlerOnDragEnd: OnDragEndResponder = (result): void => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const draggedTaskIndex = tasks.findIndex(
      (task) => task.id.toString() === draggableId
    );
    if (draggedTaskIndex === -1) {
      return;
    }

    const draggedTask = tasks[draggedTaskIndex];

    const updatedTasks = Array.from(tasks);
    updatedTasks.splice(draggedTaskIndex, 1);

    const updatedTask = {
      ...draggedTask,
      status: destination.droppableId,
    } as ITask;

    const destinationTasks = updatedTasks.filter(
      (task) => task.status === destination.droppableId
    );

    if (destination.index === 0) {
      destinationTasks.unshift(updatedTask);
    } else {
      destinationTasks.splice(destination.index, 0, updatedTask);
    }

    const otherTasks = updatedTasks.filter(
      (task) => task.status !== destination.droppableId
    );
    const finalTasks = [...otherTasks, ...destinationTasks];

    setTasks(finalTasks);
  };

  return (
    <Wrapper>
      <Head>
        <Title>
          <Link to={LINK_TEMPLATES.PROJECTS()}>Projects</Link> / {project.name}
        </Title>
        <Separate />
      </Head>
      <Container>
        <DragDropContext onDragEnd={handlerOnDragEnd}>
          <List>{renderColumns()}</List>
        </DragDropContext>
      </Container>
    </Wrapper>
  );
};

export default Board;
