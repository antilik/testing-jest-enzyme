import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Root from "Root";
import App from "components/App";

render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.getElementById("root"),
);
