/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const {loginUser}=useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), []);
  //1行目で[]内が空白でもエラーが出ないようにしている。そのおかげで初回一回だけ関数を実行出来ている。

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );
  //usersの変更の度にonSelectUserを更新する。
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
    </>
  );
});
//Wrap=等間隔にならべつつレスポンシブにも対応する/spacingを指定すれば間隔が操作できる
//WrapItem=Wrapする要素一つ一つ
//useEffect=初めに処理を一回だけ行った状態で画面を表示するのでデータの取得などに向いてる。
//第2引数に入れた内容が更新されると更新されるが気を付けないと無限ループする。
//isOpen=開いているかどうか/onOpen=開ける指示/onClose=閉じる指示/
//useCallbackはpropsとして渡したい関数やhooksとして他のコンポーネントで使いたい関数につける。
