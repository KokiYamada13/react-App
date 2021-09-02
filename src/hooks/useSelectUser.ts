import { User } from "../types/api/user";
import { useCallback, useState } from "react";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//　選択したユーザー情報
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
