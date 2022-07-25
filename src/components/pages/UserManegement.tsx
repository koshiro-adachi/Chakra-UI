import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC } from "react";

export const UserManegement: FC = memo(() => {
  return (
    <Wrap p={{base:4,md:10}} >
      <WrapItem>
        <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md"p={4} _hover={{opacity:0.8}} >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="プロフィール画像"
              m='auto'
            />
            <Text fontSize='lg' fontWeight='bold' >aaaaa</Text>
            <Text fontSize='sm' color='gray' >bbbbb</Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
//Wrap=等間隔にならべつつレスポンシブにも対応する/spacingを指定すれば間隔が操作できる
//WrapItem=Wrapする要素一つ一つ
