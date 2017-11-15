import withRedux from "next-redux-wrapper";
import { store } from "store/configureStore";

import Home from "./home";

export default withRedux(store)(Home);
