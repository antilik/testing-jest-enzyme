import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import reduxPromise from "redux-promise";

import asyncFunc from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers";

const Root = ({ initialState = {}, children }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncFunc, stateValidator),
  );

  return <Provider store={store}> {children}</Provider>;
};

export default Root;
