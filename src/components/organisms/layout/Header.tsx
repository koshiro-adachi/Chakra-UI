import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo } from "react";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
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
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザー一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});

//<Flex>flexboxのように横に要素を並べていく要素が作成できる。asはどのタグとしてレンダリングするかが指定できる。
//bg=backgroundColor/align=textAlign/justify=justifyContent/pr=paddingRight
//<Heading>=h1タグのような文字を出せる
//ChakraUIではレスポンシブも楽に設定出来る。padding={{base:3,md:5}}がその例である。baseが普段の大きさ、md以上になると大きさが5になる。
//displayでレスポンシブ対応も簡単にできる。baseがモバイル版サイズである。ここをnoneにするだけで表示が消える。
//flexとblockは…
//variant
//Drawer=スライドバー/placement=どちらの画面からスライドするか/onClose isOpen=開いたり閉じたりする動作を実装したライブラリから実装
//onOpen=onClickした時に開くように設定する。
