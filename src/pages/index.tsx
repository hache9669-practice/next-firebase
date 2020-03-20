import React from "react";
import Head from "next/head";
import { NextPage, NextPageContext } from "next";
import { CountButton } from "../components/CountButton";

type Props = {
  title: string;
};

const page: NextPage<Props> = props => {
  return (
    <>
      <Head>
        <title>Next.js + Firebase sample Index</title>
      </Head>
      <CountButton initial={0} />
      <a href="/posts">POSTS</a>
    </>
  );
};

export default page;
