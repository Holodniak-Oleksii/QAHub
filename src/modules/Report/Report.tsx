import { useGetProjectsQuery } from "@/api";
import { EStatus } from "@/common/enums";
import { useUserStore } from "@/common/store/user";
import { CategoryScale, Chart, LinearScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {
  ChartContainer,
  Content,
  Separate,
  Td,
  Th,
  Title,
  UsersTable,
  Wrapper,
} from "./styles";

Chart.register(CategoryScale, LinearScale);

const Report = () => {
  const user = useUserStore((state) => state.user);
  const { data: projects } = useGetProjectsQuery(user?.id || 0);

  const uniqueUsers = Array.from(
    new Set(
      projects?.flatMap((project) =>
        project.members.map((member) => member.username)
      )
    )
  );

  const chartData = {
    labels: projects?.map((project) => project.name),
    datasets: [
      {
        label: "TODO",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: projects?.map(
          (project) =>
            project.tasks.filter((task) => task.status === EStatus.TODO).length
        ),
      },
      {
        label: "IN PROGRESS",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: projects?.map(
          (project) =>
            project.tasks.filter(
              (task) => task.status === EStatus["IN PROGRESS"]
            ).length
        ),
      },
      {
        label: "BLOCKED",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 206, 86, 0.4)",
        hoverBorderColor: "rgba(255, 206, 86, 1)",
        data: projects?.map(
          (project) =>
            project.tasks.filter((task) => task.status === EStatus.BLOCKED)
              .length
        ),
      },
      {
        label: "DONE",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: projects?.map(
          (project) =>
            project.tasks.filter((task) => task.status === EStatus.DONE).length
        ),
      },
      {
        label: "BACKLOG",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(153, 102, 255, 0.4)",
        hoverBorderColor: "rgba(153, 102, 255, 1)",
        data: projects?.map(
          (project) =>
            project.tasks.filter((task) => task.status === EStatus.BACKLOG)
              .length
        ),
      },
    ],
  };

  return (
    <Wrapper>
      <Content>
        <Title>Report</Title>
        <Separate />

        <ChartContainer>
          <Bar
            data={chartData}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </ChartContainer>
        <UsersTable>
          <thead>
            <tr>
              <Th>Username</Th>
              <Th>Position</Th>
              <Th>Projects</Th>
            </tr>
          </thead>
          <tbody>
            {uniqueUsers.map((username) => {
              const userProjects = projects?.filter((project) =>
                project.members.some((member) => member.username === username)
              );
              return (
                <tr key={username}>
                  <Td>{username}</Td>
                  <Td>
                    {userProjects
                      ?.flatMap((project) =>
                        project.members
                          .filter((member) => member.username === username)
                          .map((member) => member.positions)
                      )
                      .join(", ")}
                  </Td>
                  <Td>
                    {userProjects?.map((project) => project.name).join(", ")}
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </UsersTable>
      </Content>
    </Wrapper>
  );
};

export default Report;
