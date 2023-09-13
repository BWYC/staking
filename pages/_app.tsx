import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CoreBlockchain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Navbar } from "../components/Navbar/Navbar";

// This is the chain your dApp will work on.
const activeChain = CoreBlockchain;
const sdk = new ThirdwebSDK(CoreBlockchain, {
  clientId: "65a85b91315ca838d7a8472fb0e64f92",
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}>
        <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
