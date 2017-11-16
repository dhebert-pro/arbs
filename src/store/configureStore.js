import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducers";
import { FETCH_POSTS } from "./actions/types";

const fetchPostsAction = posts => {
  return { type: FETCH_POSTS, payload: posts };
};

// ACTIONS
export const fetchPosts = () => dispatch => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(result => {
      return dispatch(fetchPostsAction(result.data));
    });
};

export const store = (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
