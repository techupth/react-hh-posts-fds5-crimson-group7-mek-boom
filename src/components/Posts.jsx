import { useState } from "react";
import { posts } from "../data/posts";

function Posts() {
  const [postList, setPostList] = useState(posts);

  const likePost = (postIndex) => {
    const newPostlist = [...postList];
    newPostlist[postIndex].likes = newPostlist[postIndex].likes + 1;
    setPostList(newPostlist);
  };

  const dislikePost = (postIndex) => {
    const newPostlist = [...postList];
    newPostlist[postIndex].likes = newPostlist[postIndex].likes - 1;
    setPostList(newPostlist);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postList.map((item, index,) => {
          return (
            <div key={index} className="post-item">
              <div className="post-header">
                <h2>
                  {item.title} #{item.id}
                </h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    likePost(index);
                  }}
                  value={postList}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    dislikePost(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
