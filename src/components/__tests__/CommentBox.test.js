import React from "react";
import { mount } from "enzyme";
// https://enzymejs.github.io/enzyme/docs/api/mount.html
// https://devhints.io/enzyme

import Root from "Root";
import CommentBox from "components/CommentBox";

let wrapped = null;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);

  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area:", () => {
  const myComment = "My new comment";

  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: myComment } });
    wrapped.update();
  });

  it("can enter input into the textarea", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual(myComment);
  });

  it("when form is submitted, textarea should get emptied", () => {
    expect(wrapped.find("form").length).toEqual(1);

    expect(wrapped.find("textarea").prop("value")).toEqual(myComment);

    wrapped.find("form").simulate("submit");

    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
