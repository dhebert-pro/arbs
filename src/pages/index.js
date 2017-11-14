import React from 'react';
import withRedux from 'next-redux-wrapper';

import { store } from '../store/configureStore';
import Footer from '../components/Footer';
import Homepage from '../components/Homepage';
import Header from '../components/Header';
import App from '../components/App';
import axios from "axios";

const Page = ({datas}) => (
    <App className='App Homepage'>
        <div>
            <Header />
            <Homepage datas={datas} />
            <Footer />
        </div>
    </App>
);

Page.getInitialProps = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
            console.log("resultat", result);
            return ({datas:result.data});
        }
    );
}

export default withRedux(store)(Page);