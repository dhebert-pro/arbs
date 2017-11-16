import { FETCH_POSTS } from "../actions/types";

const PostReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default PostReducer;
