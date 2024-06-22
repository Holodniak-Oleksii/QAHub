import { EModal } from "@/common/enums";
import { PlusIcon } from "@/common/icons";
import { ProjectCard } from "@/common/shared";
import { mockProjects } from "@/mocks";
import { useModal } from "@ebay/nice-modal-react";
import {
  Content,
  CreateProject,
  Grid,
  IconButton,
  Separate,
  Title,
  Wrapper,
} from "./styles";

const Projects = () => {
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
        <Grid>
          {renderProjects()}
          <CreateProject onClick={() => showCreateProjectModal()}>
            <IconButton>
              <PlusIcon width={32} height={32} strokeWidth={1} />
            </IconButton>
          </CreateProject>
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Projects;
