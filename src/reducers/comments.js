import { SAVE_COMMENT, FETCH_COMMENT } from "actions/types";

const initialState = [];

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENT:
      const commentsArr = action.payload.data.map(({ name }) => name);

      return [...state, ...commentsArr];
    default:
      return state;
  }
}
export default commentsReducer;
