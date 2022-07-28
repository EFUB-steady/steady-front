import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import ModalWrapper from "./ui/modal/recoil/ModalWrapper";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./data/react-query/queryClient";
import GlobalErrorBoundary from "./data/error/GlobalErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalErrorBoundary>
        <React.StrictMode>
          <ModalWrapper />
          <App />
        </React.StrictMode>
      </GlobalErrorBoundary>
    </RecoilRoot>
  </QueryClientProvider>,
);
