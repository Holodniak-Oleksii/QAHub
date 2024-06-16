import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { Main } from "./styles";

const Layout: FC<PropsWithChildren> = () => {
  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
};

export default Layout;
