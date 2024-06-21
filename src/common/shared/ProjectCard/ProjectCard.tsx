import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Footer, Head, Row, Title, Wrapper } from "./styles";
import { IProjectCardProps } from "./types";
import { LINK_TEMPLATES } from "@/common/constants";

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  const push = useNavigate();

  const handlerRedirect = () => {
    push(LINK_TEMPLATES.BOARD(project.id));
  };

  return (
    <Wrapper onClick={handlerRedirect}>
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
