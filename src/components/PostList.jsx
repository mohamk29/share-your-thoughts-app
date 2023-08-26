import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((prevPosts) => {
      fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return [postData, ...prevPosts];
    });
  };

  return (
    <>
      {props.modalIsVisible && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onAddPost={addPostHandler} onCancel={props.onStopPosting} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post key={post.body} author={post.author} body={post.body} />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
