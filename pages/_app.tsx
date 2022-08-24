import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { initKakao } from "../src/components/KakaoLogin";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initKakao();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
