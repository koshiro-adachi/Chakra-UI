import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), [getUsers]);

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
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
//Wrap=等間隔にならべつつレスポンシブにも対応する/spacingを指定すれば間隔が操作できる
//WrapItem=Wrapする要素一つ一つ
//useEffect=初めに処理を一回だけ行った状態で画面を表示するのでデータの取得などに向いてる。
//第2引数に入れた内容が更新されると更新されるが気を付けないと無限ループする。
