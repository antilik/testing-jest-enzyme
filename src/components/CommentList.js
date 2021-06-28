import React from "react";

import { useSelector } from "react-redux";

const CommentList = () => {
  const commentList = useSelector((store) => store.comments);

  const ListItem = (name) => <li key={name}>{name}</li>;

  return (
    <div>
      <ul>{commentList.map((name) => ListItem(name))}</ul>
    </div>
  );
};
export default CommentList;
