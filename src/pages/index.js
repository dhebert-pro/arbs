import withRedux from "next-redux-wrapper";
import { store, fetchPosts } from "store/configureStore";
import { bindActionCreators } from "redux";
import { rehydrate } from "glamor";

import Home from "./Home";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "test") {
  rehydrate(window.__NEXT_DATA__.ids);
}
Home.getInitialProps = ({ store }) => {
  return store.dispatch(fetchPosts());
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch)
  };
};

export default withRedux(
  store,
  state => ({ posts: state.post.posts }),
  mapDispatchToProps
)(Home);
