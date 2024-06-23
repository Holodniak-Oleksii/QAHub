import { Wrapper } from "./styles";

const Avatar = ({ name = "" }) => (
  <Wrapper className="avatar" title={name}>
    {name.slice(0, 2)}
  </Wrapper>
);

export default Avatar;
