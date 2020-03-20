import * as React from "react";
import Document, { DocumentContext } from "next/document";
import DefaultLayout from "../layouts/index";

/**
 * 全ページの高階コンポーネント
 * サーバサイドで実行される共通処理を記述する。
 */
export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps
    };
  }

  render(): JSX.Element {
    return <DefaultLayout />;
  }
}
