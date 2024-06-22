import { EModal } from "@/common/enums";
import { PlusIcon } from "@/common/icons";
import { ProjectCard } from "@/common/shared";
import { useUserStore } from "@/common/store/user";
import { mockProjects } from "@/mocks";
import { useModal } from "@ebay/nice-modal-react";
import {
  Content,
  CreateProject,
  Grid,
  IconButton,
  Message,
  Separate,
  Title,
  Wrapper,
} from "./styles";

const Projects = () => {
  const isAuth = useUserStore((state) => state.isAuth);
  const { show: showCreateProjectModal } = useModal(
    EModal.CREATE_PROJECT_MODAL
  );

  const renderProjects = () =>
    mockProjects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));

  return (
    <Wrapper>
      <Content>
        <Title>Your projects</Title>
        <Separate />
        {isAuth ? (
          <Grid>
            {renderProjects()}
            <CreateProject onClick={() => showCreateProjectModal()}>
              <IconButton>
                <PlusIcon width={32} height={32} strokeWidth={1} />
              </IconButton>
            </CreateProject>
          </Grid>
        ) : (
          <Message>You must be logged in to access projects</Message>
        )}
      </Content>
    </Wrapper>
  );
};

export default Projects;
