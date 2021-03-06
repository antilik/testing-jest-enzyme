import React from "react";
import { shallow } from "enzyme";
// https://enzymejs.github.io/enzyme/docs/api/shallow.html

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

describe("<App />", () => {
  let wrapped = null;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it("shows a comment box", () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it("shows a comment list", () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
