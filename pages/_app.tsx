import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CoreBlockchain } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
const activeChain = CoreBlockchain;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
