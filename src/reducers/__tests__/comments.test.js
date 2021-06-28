import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENTS", () => {
  const myComment = "New Comment";
  const action = {
    type: SAVE_COMMENT,
    payload: myComment,
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([myComment]);
});

it("handles action with unknown type", () => {
  const newState = commentsReducer([], { type: "JEST_ENZYME" });

  expect(newState).toEqual([]);
});
