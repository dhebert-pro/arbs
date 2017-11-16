import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {};

export const actionTypes = {
  FETCH_POSTS: "FETCH_POSTS"
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

const fetchPostsAction = posts => {
  return { type: actionTypes.FETCH_POSTS, payload: posts };
};

// ACTIONS
export const fetchPosts = () => dispatch => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(result => {
      return dispatch(fetchPostsAction(result.data));
    });
};

export const store = (initialState = initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
