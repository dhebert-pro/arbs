import Home from "./home";
import withRedux from "next-redux-wrapper";
import { store } from "store/configureStore";

export default withRedux(store)(Home);