import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// import useRequireAuth from "components/hooks/useRequireAuth";
import withRequireAuth from "components/withRequireAuth";
import { fetchComments, saveComment } from "actions";

const CommentBox = (props) => {
  // useRequireAuth();
  const dispatch = useDispatch();
  const history = useHistory();

  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const navigateHome = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      dispatch(saveComment(comment));
    }
    setComment("");
    navigateHome();
  };

  const handleFetchComments = () => {
    dispatch(fetchComments());
    navigateHome();
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

export default withRequireAuth(CommentBox);
