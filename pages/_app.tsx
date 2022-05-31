import "../styles/globals.css";
import type { AppProps } from "next/app";
import _Layout from "../components/_Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <_Layout>
      <Component {...pageProps} />
    </_Layout>
  );
}

export default MyApp;
