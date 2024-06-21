import { Wrapper } from "./styles";

const Avatar = ({ name = "" }) => <Wrapper>{name.slice(0, 2)}</Wrapper>;

export default Avatar;
