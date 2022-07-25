//外部インポート
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
//内部インポート
import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
//ChakraProviderで囲われたところにChakraUIを設定できる。
//機能/ChakraProvider/BrowserRouter
