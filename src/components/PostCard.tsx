import React from "react";
import { Post } from "../interface/models";

type Props = {
  post: Post;
};

const component: React.FC<Props> = props => {
  return (
    <div id={props.post.id}>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
    </div>
  );
};

export default component;
