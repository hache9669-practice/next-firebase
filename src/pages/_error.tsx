import React from "react";
import { NextPageContext } from "next";
import Head from "next/head";

type Props = {
  title: string;
  errorCode: number;
};

/**
 * カスタムエラーページ
 */
class Error extends React.Component<Props> {
  static async getInitialProps({ res }: NextPageContext): Promise<Props> {
    if (res) {
      return {
        title: `Error: ${res.statusCode}`,
        errorCode: res.statusCode
      };
    } else {
      return {
        title: "something missing",
        errorCode: 500
      };
    }
  }

  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        {this.props.errorCode}
      </>
    );
  }
}

export default Error;
