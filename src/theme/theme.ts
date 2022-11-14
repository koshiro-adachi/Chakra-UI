import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800",
      },
    },
  },
});
export default theme;
//extendThemeはCSSモジュールを拡張できる機能。新しくテーマ設定したり、グローバルテーマを指定したりできる。
//定数はexport defaultで他に飛ばせる。
