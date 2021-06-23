import React from "react";
import { mount } from "enzyme";
// https://enzymejs.github.io/enzyme/docs/api/mount.html
// https://devhints.io/enzyme

import CommentBox from "components/CommentBox";

describe("<CommonBox />", () => {
  let wrapped = null;

  beforeEach(() => {
    wrapped = mount(<CommentBox />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a text area and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);

    expect(wrapped.find("button").length).toEqual(1);
  });

  it("can enter input into the textarea", () => {
    //
  });

  it("when input is submitted, textarea should get emptied", () => {
    //
  });
});
