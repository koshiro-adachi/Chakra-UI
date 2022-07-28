import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const {setLoginUser}=useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin=res.data.id===10?true:false;
            setLoginUser({...res.data,isAdmin});//res.dataにisAdminを追加
            showMessage({ title: "success!!", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "ユーザーが見つかりません！",
              status: "error",
            });
          }
        })
        .catch(() =>
          showMessage({ title: "ログインできません", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    [history, showMessage,setLoginUser]
  );
  return { login, loading };
};
//①login設定機能:型(User)のデータをaxiosでとってきてログインidと同じデータがあればHomeへの遷移関数をloginとして返す
//②loading設定機能:loading中かどうかをstateで分けてboolean型で返す
//①②をuseAuthとしてカスタムフックを作成
