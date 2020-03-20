import React from "react";

type Props = {
  post: Post;
};

const component: React.FC<Props> = props => {
  return (
    <div key={props.post.id}>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
    </div>
  );
};

export default component;
