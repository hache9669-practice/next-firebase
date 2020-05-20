import React from "react";
import { Post } from "../interface/models";
import { db } from "../lib/db";

type Props = {
  post: Post;
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  const id = event.currentTarget.id;
  db.collection("posts")
    .doc(id)
    .delete()
    .then(() => {
      console.log("delete complete: " + id);
    })
    .catch(err => {
      console.log(JSON.stringify(err));
    });
};

const component: React.FC<Props> = props => {
  return (
    <div id={props.post.id}>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
      <button id={props.post.id} onClick={handleClick}>
        delete
      </button>
    </div>
  );
};

export default component;
