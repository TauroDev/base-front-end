import React from "react";
import { Provider } from "react-redux";
import Store from "@Store";
import { Master } from "@Routes";
import { SnackbarProvider } from "notistack";
import { NextUIProvider } from "@nextui-org/react";


function App() {
  return (
    <>
      <NextUIProvider>
        <SnackbarProvider>
          <Provider store={Store}>
            <Master />
          </Provider>
        </SnackbarProvider>
      </NextUIProvider>
    </>
  );
}

export default App;
