
import { assetChainTestnet } from "viem/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";


export const config = getDefaultConfig({
  appName: "Cropcrypt", //Update App Name
  projectId: import.meta.env.VITE_PROJECT_ID, 
  chains: [assetChainTestnet],
  ssr: false, 
});
