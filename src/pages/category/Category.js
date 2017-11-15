import React from "react";
import withRedux from "next-redux-wrapper";

import { store } from "store/configureStore";
import Footer from "components/Footer";
import Category from "components/Category";
import Header from "components/Header";
import App from "components/App";

const Page = ({ slug }) => (
    <App className='App Homepage'>
        <div>
            <Header displaySearch={true} />
            <Category slug={slug} />
            <Footer />
        </div>
    </App>
);

export default withRedux(store)(Page);