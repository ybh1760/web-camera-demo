import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <script src="//developers.kakao.com/sdk/js/kakao.min.js" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
