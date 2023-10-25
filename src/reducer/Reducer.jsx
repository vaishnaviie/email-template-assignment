import { ACTION } from "../constant/Constant";

export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SEARCH:
      return { ...state, search: action.payload };

    default:
      return state;
  }
};

// export default Reducer;
