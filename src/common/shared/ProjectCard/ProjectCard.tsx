import { LINK_TEMPLATES } from "@/common/constants";
import { BookmarkIcon } from "@/common/icons";
import { useUserStore } from "@/common/store/user";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Footer, Head, OwnerPlug, Row, Title, Wrapper } from "./styles";
import { IProjectCardProps } from "./types";

const ProjectCard: FC<IProjectCardProps> = ({ project }) => {
  const push = useNavigate();
  const user = useUserStore((state) => state.user);

  const handlerRedirect = () => {
    push(LINK_TEMPLATES.BOARD(project.id));
  };

  return (
    <Wrapper onClick={handlerRedirect}>
      {project.ownerId === user?.id && (
        <OwnerPlug title="You are owner">
          <BookmarkIcon />
        </OwnerPlug>
      )}
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
