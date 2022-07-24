import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

type Props={
    children: ReactNode;
}
//ReactNodeはタグで囲った要素の型を宣言するためのもの
//FC<Props>ではコンポーネント自体に型を宣言した上でpropsの型を宣言する時に使える

export const HeaderLayout: FC<Props> = memo((props) => {
    const {children}=props;
  return (
    <>
    <Header />
    {children}
    </>
  );
});

