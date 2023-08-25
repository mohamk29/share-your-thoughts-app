import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    props.onCancel();
    props.onAddPost(postData);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChangeHandler}
          value={enteredBody}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={authorChangeHandler}
          value={enteredAuthor}
        />
      </p>
      <p className={classes.actions}>
        <button
          type="button"
          className={classes.button}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.button}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
