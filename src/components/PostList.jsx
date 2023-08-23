import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = (props) => {
  return (
    <ul className={classes.posts}>
      <Post author="Maximilan" body="React.js is awsome" />
      <Post author="Manuel" body="Check out the full course!" />
    </ul>
  );
};

export default PostList;
