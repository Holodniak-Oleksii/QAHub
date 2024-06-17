import { ProjectCard } from "@/common/shared";
import { mockProjects } from "@/mocks";
import { Content, Grid, Separate, Title, Wrapper } from "./styles";

const Projects = () => {
  const renderProjects = () =>
    mockProjects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));

  return (
    <Wrapper>
      <Content>
        <Title>Your projects</Title>
        <Separate />
        <Grid>{renderProjects()}</Grid>
      </Content>
    </Wrapper>
  );
};

export default Projects;
