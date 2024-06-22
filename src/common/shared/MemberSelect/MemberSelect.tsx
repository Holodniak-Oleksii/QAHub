import { useOnClickOutside } from "@/common/hooks";
import { IUser, TID } from "@/common/types";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import Avatar from "../Avatar/Avatar";
import { UserItem } from "./components";
import { filterObjects } from "./helpers";
import {
  Input,
  InputContainer,
  Item,
  Label,
  Name,
  Portal,
  Wrapper,
} from "./styles";
import { IMembersSelectProps } from "./types";

const MemberSelect: FC<IMembersSelectProps> = ({
  members,
  usersList,
  onChangeMembers,
}) => {
  const [users, setUsers] = useState<IUser[]>(members || []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const refWrapper = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  useOnClickOutside(refWrapper, () => setIsOpen(false));

  useEffect(() => {
    onChangeMembers(members);
  }, [members, onChangeMembers]);

  const handlerAddMember = (user: IUser) => {
    return () => setUsers((prev) => [...prev, user]);
  };

  const handlerRemoveMember = (id: TID) => {
    return () => setUsers((prev) => prev.filter((item) => item.id !== id));
  };

  const renderUsers = () =>
    users.map((user) => (
      <UserItem user={user} onClick={handlerRemoveMember(user.id)} />
    ));

  const initialUsersList = useMemo(
    () => filterObjects(usersList, users, "id", search),
    [search, usersList, users]
  );

  const renderMembers = () =>
    initialUsersList.map((user) => (
      <Item key={user.id} onClick={handlerAddMember(user)}>
        <Avatar name={user.username} />
        <Name>{user.username}</Name>
      </Item>
    ));

  return (
    <Wrapper ref={refWrapper}>
      <Label>Choose members</Label>

      <InputContainer onClick={() => setIsOpen(true)}>
        {renderUsers()}
        <Input
          placeholder="Enter username"
          value={search}
          onChange={(value) => setSearch(value.target.value)}
        />
      </InputContainer>
      {!!initialUsersList.length && (
        <Portal isOpen={isOpen}>{renderMembers()}</Portal>
      )}
    </Wrapper>
  );
};

export default MemberSelect;
