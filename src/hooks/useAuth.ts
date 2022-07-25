import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("error");
          }
        })
        .catch(() => alert("ログインできません"))
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login, loading };
};
//①login設定機能:型(User)のデータをaxiosでとってきてログインidと同じデータがあればHomeへの遷移関数をloginとして返す
//②loading設定機能:loading中かどうかをstateで分けてboolean型で返す
//①②をuseAuthとしてカスタムフックを作成