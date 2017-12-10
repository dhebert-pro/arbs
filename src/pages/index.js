import { compose } from "recompose";
import withRedux from "next-redux-wrapper";
import { store, fetchPosts } from "store/configureStore";
import { bindActionCreators } from "redux";
import withGlamor from "decorators/withGlamor";

import Home from "./Home";

Home.getInitialProps = ({ store }) => {
  return store.dispatch(fetchPosts());
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch)
  };
};

const container = compose(
  withGlamor,
  withRedux(store, state => ({ posts: state.post.posts }), mapDispatchToProps)
);

export default container(Home);
