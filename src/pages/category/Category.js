import React from "react";
import Footer from "components/Footer";
import Category from "components/Category";
import Header from "components/Header";
import App from "components/App";

const Page = ({ slug }) => (
  <App className="App Homepage">
    <div>
      <Header displaySearch={true} />
      <Category slug={slug} />
      <Footer />
    </div>
  </App>
);

export default Page;
