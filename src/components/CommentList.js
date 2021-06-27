import React from "react";

import { useSelector } from "react-redux";

const CommentList = () => {
  const commentList = useSelector((store) => store.comments);

  console.log("commentList >>>>>>>>>>", commentList);

  return <div>Comment List</div>;
};
export default CommentList;
