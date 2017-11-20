/*global expect afterEach test describe:true */
/*eslint no-undef: "error"*/
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { fetchPosts } from "store/configureStore";
import reducer from "store/reducers";
import thunk from "redux-thunk";
import { FETCH_POSTS } from "store/actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
var mock = new MockAdapter(axios);

describe("Post", () => {
  afterEach(() => {
    mock.reset();
    mock.restore();
  });

  test("should call the correct actions when fetchPosts", done => {
    mock.onGet("http://localhost:3001/piscines").reply(200, ["TEST"]);
    const store = mockStore({});
    store.dispatch(fetchPosts()).then(() => {
      expect(store.getActions()).toContainEqual({
        type: FETCH_POSTS,
        payload: ["TEST"]
      });
      done();
    });
  });

  test("should define reducer", done => {
    expect(reducer(undefined, {})).toHaveProperty("post");
    done();
  });

  test("should return the initial state", done => {
    expect(reducer(undefined, {}).post).toEqual({});
    done();
  });

  test("should handle FETCH_POSTS", () => {
    expect(
      reducer(undefined, {
        type: FETCH_POSTS,
        payload: ["TEST"]
      }).post
    ).toEqual({
      posts: ["TEST"]
    });

    expect(
      reducer(
        {
          post: {
            posts: ["TEST1"]
          }
        },
        {
          type: FETCH_POSTS,
          payload: ["TEST2"]
        }
      ).post
    ).toEqual({
      posts: ["TEST2"]
    });
  });
});
