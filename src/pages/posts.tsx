import React from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { db } from "../lib/db";
import { Post } from "../interface/models";
import PostCard from "../components/PostCard";

type Props = {
  posts: Post[];
};

const page: NextPage<Props> = props => {
  const [values, loading, error] = useCollectionData<Post>(
    db.collection("posts"),
    { idField: "id" }
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !values) {
    return <div>{`Error: ${error?.message || "values does not exist"}`}</div>;
  }

  return (
    <>
      <Head>
        <title>Next.js + Firebase sample Posts</title>
      </Head>
      {values.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <a href="/index">INDEX</a>
    </>
  );
};

export default page;
