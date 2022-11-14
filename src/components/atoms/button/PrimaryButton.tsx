import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
//disabled=textboxに文字が何かしら入力されているかをみる。?は指定がない時は無視してよいということ]
//isLoading=trueの時勝手にloading表示してくれるCSSモジュール,disabledも同じ
//disabledにするのはdisabledかloadingがtrueの時という指定
