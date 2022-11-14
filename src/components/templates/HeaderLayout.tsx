import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};
//ReactNodeはタグで囲った要素の型を宣言するためのもの
//FC<Props>ではコンポーネント自体に型を宣言した上でpropsの型を宣言する時に使える

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
//memo化はとりあえず全部しといていいが、propsが500以上くらいから大差なくなり、1000超えるころにはmemo化しない方が早くなる。
