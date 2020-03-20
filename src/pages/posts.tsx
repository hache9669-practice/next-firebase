import React from "react";
import { db } from "../lib/db";
import Post from "../components/Post";

type Props = {
  posts: Post[];
};

export default class Posts extends React.Component<Props> {
  static async getInitialProps() {
    // db.jsのfirebaseのDB接続ファンクション
    // DBのpostsコレクション内を全て取得した結果 = result
    const result = await new Promise((resolve, reject) => {
      db.collection("posts")
        .get()
        .then(snapshot => {
          console.log(snapshot);
          const data: Post[] = [];
          snapshot.forEach(doc => {
            const post: Post = doc.data() as Post;
            data.push({
              id: doc.id,
              ...post
            });
          });
          resolve(data);
        })
        .catch(error => {
          reject([]);
        });
    });
    return { posts: result };
  }

  handleDelete = (id: string) => {
    console.log(id);
  };

  render() {
    const posts = this.props.posts;
    return (
      <>
        {posts.map(post => (
          <Post post={post}></Post>
        ))}
        <a href="/index">INDEX</a>
      </>
    );
  }
}
