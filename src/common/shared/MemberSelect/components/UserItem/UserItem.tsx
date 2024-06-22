import { PlusIcon } from "@/common/icons";
import Avatar from "@/common/shared/Avatar/Avatar";
import { FC } from "react";
import { Icon, Name, Wrapper } from "./styles";
import { IUserItemProps } from "./types";

const UserItem: FC<IUserItemProps> = ({ user, onClick }) => (
  <Wrapper>
    <Avatar name={user.username} />
    <Name>{user.username}</Name>
    <Icon onClick={onClick} type="button">
      <PlusIcon strokeWidth={1} height={20} width={20} />
    </Icon>
  </Wrapper>
);

export default UserItem;
