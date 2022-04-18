import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { RobinhoodProvider } from "../context/RobinhoodContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl="https://2gphhsl90bnw.usemoralis.com:2053/server"
      appId="T68Vz6mKOpxgA7ZlJwxtBh2ejkqShFira3RWHZCJ"
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
