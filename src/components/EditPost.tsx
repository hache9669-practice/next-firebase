import React from "react";
import { Post } from "../interface/models";
import { db } from "../lib/db";
const { useState } = React;

type Props = {
  initial?: Post;
};

const registerPost = async (
  evt: React.MouseEvent<HTMLButtonElement>,
  post: Post
): Promise<boolean> => {
  if (post.id) {
    return db
      .collection("posts")
      .doc(post.id)
      .set({
        title: post.title,
        body: post.body
      })
      .then(function() {
        console.log("Document successfully written!");
        return true;
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
        return false;
      });
  } else {
    return db
      .collection("posts")
      .add({
        title: post.title,
        body: post.body
      })
      .then(function() {
        console.log("Document successfully written!");
        return true;
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
        return false;
      });
  }
};

export const EditPost: React.FC<Props> = props => {
  const newPost: Post = {
    title: "",
    body: ""
  };
  const [post, setPost] = useState(props.initial || newPost);

  return (
    <div>
      <input
        placeholder="title"
        value={post.title}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>): void => {
          setPost({
            ...post,
            title: evt.target.value
          });
        }}
      />
      <input
        placeholder="body"
        value={post.body}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>): void => {
          setPost({
            ...post,
            body: evt.target.value
          });
        }}
      />
      <button
        onClick={(evt: React.MouseEvent<HTMLButtonElement>): void => {
          registerPost(evt, post);
        }}
      >
        更新
      </button>
      <p>
        {post.title} {post.body}
      </p>
    </div>
  );
};
