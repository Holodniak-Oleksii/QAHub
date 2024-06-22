import { Bounce, SpinnerWrapper, Wrapper } from "./styles";

const PageLoader = () => (
  <Wrapper>
    <SpinnerWrapper>
      <Bounce />
      <Bounce />
    </SpinnerWrapper>
  </Wrapper>
);

export default PageLoader;
