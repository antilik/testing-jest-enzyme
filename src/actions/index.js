import axios from "axios";

import { CHANGE_AUTH, FETCH_COMMENT, SAVE_COMMENT } from "./types";

export const saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComments = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments",
  );

  return {
    type: FETCH_COMMENT,
    payload: response,
  };
};

export const changeAuth = (isLoggedIn) => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
});
