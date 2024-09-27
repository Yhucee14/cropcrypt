
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import App from './App.jsx'
import './index.css'
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider } from "wagmi";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { config } from "./config.js"; // replace with your own wallet-connect configuration

/* 
  connect users wallet to a dapp on assetchain, through wallet-connect.
  - user clicks connect wallet.
  - shows them qr code to scan with phone.
  - user scans with phone wallet, and connects to this app(running on a-chain)
 */

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {" "}
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
