import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

let wrapped = null;
const comment1 = "Comment1";
const comment2 = "Comment2";

beforeEach(() => {
  const initialState = {
    comments: [comment1, comment2],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain(comment1);

  expect(wrapped.render().text()).toContain(comment2);
});
