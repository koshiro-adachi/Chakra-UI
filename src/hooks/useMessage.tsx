import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    },
    [toast]
  );
  return { showMessage };
};
//useToast=渡した定数hogeにhoge({設定値})を入れることでmessageを表示できる
//設定値の中身は一部propsを渡しており、特にstatusはor(|)で区切ることでこれらのうちのどれかしか選択できないようになっている。
//ざっくり言うとmemoは画面表示をreturnする時に使えてuseCallbackは関数をreturnする時に使える。memoの中でuseCallbackすることもできる。
