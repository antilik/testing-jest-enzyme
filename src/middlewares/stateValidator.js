import tv4 from "tv4";
// https://github.com/geraintluff/tv4
// http://json-schema.org/
// https://jsonschema.net/home

import stateSchema from "middlewares/stateSchema";

const stateValidator =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);
    if (!tv4.validate(getState(), stateSchema)) {
      console.warn("Invalid state schema detected");
    }
  };

export default stateValidator;
