import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    [history]
  );
  const onClickSetting = useCallback(
    () => history.push("/home/setting"),
    [history]
  );

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  );
});

//<Flex>flexboxのように横に要素を並べていく要素が作成できる。asはどのタグとしてレンダリングするかが指定できる。
//bg=backgroundColor/align=textAlign/justify=justifyContent/pr=paddingRight
//<Heading>=h1タグのような文字を出せる/Box=divみたいなもん
//ChakraUIではレスポンシブも楽に設定出来る。padding={{base:3,md:5}}がその例である。baseが普段の大きさ、md以上になると大きさが5になる。
//displayでレスポンシブ対応も簡単にできる。baseがモバイル版サイズである。ここをnoneにするだけで表示が消える。
//flexはdivタグを操作して見かけの形をかえている。blockはプロパティ。
//variantはアウトラインなどの見た目を操作
//Drawer=スライドバー/placement=どちらの画面からスライドするか/onClose isOpen=開いたり閉じたりする動作を実装したライブラリから実装
//onOpen=onClickした時に開くように設定する。

//機能/main:Drawer(useDisClosure())/sub:IconButton/CSS:Heading,Flex,Box,
