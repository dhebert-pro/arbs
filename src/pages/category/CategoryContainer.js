import withRedux from "next-redux-wrapper";
import { store } from "store/configureStore";

import Category from "./Category";

Category.getInitialProps = ({ query }) => {
  return { slug: query.slug };
};

export default withRedux(store)(Category);
