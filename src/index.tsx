import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainLayout from "./MainLayout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
