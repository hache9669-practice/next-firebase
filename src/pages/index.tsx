import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { CountButton } from "../components/CountButton";

const page: NextPage = () => {
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
