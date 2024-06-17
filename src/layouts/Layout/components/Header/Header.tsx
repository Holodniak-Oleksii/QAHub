import { useLocation } from "react-router-dom";
import { Account } from "./components";
import { navigation } from "./data";
import { Content, Logo, Navigation, RedirectLink, Wrapper } from "./styles";

const Header = () => {
  const { pathname } = useLocation();

  const renderNavigation = () =>
    navigation.map((nav) => (
      <RedirectLink to={nav.path} key={nav.id} isActive={pathname === nav.path}>
        {nav.title}
      </RedirectLink>
    ));

  return (
    <Wrapper>
      <Content>
        <Navigation>
          <Logo>
            QA<span>Hub</span>
          </Logo>
          {renderNavigation()}
        </Navigation>
        <Account />
      </Content>
    </Wrapper>
  );
};

export default Header;
