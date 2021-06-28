import axios from "axios";

import { FETCH_COMMENT, SAVE_COMMENT } from "./types";

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
