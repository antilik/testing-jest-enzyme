import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchComments, saveComment } from "actions";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      dispatch(saveComment(comment));
    }
    setComment("");
  };

  const handleFetchComments = () => {
    dispatch(fetchComments());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className={"btn__fetch-comments"} onClick={handleFetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

export default CommentBox;
