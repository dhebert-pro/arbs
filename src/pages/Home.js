import React from "react";
import Footer from "components/Footer";
import Homepage from "components/Homepage";
import Header from "components/Header";
import App from "components/App";

const Page = ({ posts }) => (
  <App className="App Homepage">
    <div>
      <Header />
      <Homepage datas={posts} />
      <Footer />
    </div>
  </App>
);

export default Page;
