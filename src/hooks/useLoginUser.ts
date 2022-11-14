import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
  //useContextはpropsを介することなく全ての階層にデータを繋げる。
  //今回はそのデータを繋げるAPIをhooks化して簡単に設定できるようにしている。
  //providerのログイン情報データをuseLoginUser()を使うだけで取得できる。
