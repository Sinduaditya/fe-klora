import { TonConnectUIProvider } from "@tonconnect/ui-react";
import WebApp from "@twa-dev/sdk";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import WalletProvider from "./hooks/WalletProvider";
import "./index.css";

// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

  const root = document.getElementById("root") as HTMLElement;
WebApp.ready();
ReactDOM.createRoot(root!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <WalletProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </WalletProvider>
  </TonConnectUIProvider>
);
