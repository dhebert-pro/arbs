import withRedux from "next-redux-wrapper";
import { store, fetchPosts } from "store/configureStore";
import { bindActionCreators } from "redux";

import Home from "./Home";

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
  state => ({ posts: state.posts }),
  mapDispatchToProps
)(Home);
