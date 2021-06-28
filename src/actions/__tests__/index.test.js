import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  it("has the correct type of SAVE_COMMENTS", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct palyload", () => {
    const myComment = "New Comment";
    const action = saveComment(myComment);

    expect(action.payload).toEqual(myComment);
  });
});
