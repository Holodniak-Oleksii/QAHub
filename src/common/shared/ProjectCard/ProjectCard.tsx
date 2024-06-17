import { FC } from "react";
import { Avatar, Footer, Head, Row, Title, Wrapper } from "./styles";
import { IProjectCardProps } from "./types";

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  return (
    <Wrapper>
      <Head>
        <Avatar>{project.name.slice(0, 2)}</Avatar>
        <Title>{project.name}</Title>
      </Head>
      <Footer>
        <Row>
          Count of task: <span>{project.tasks.length}</span>
        </Row>
        <Row>
          Joined members: <span>{project.members.length}</span>
        </Row>
      </Footer>
    </Wrapper>
  );
};

export default ProjectCard;
