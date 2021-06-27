import { SAVE_COMMENT } from "actions/types";

const initialState = [];

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
export default commentsReducer;
