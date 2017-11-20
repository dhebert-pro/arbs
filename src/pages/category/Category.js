import React from "react";
import Footer from "components/Footer";
import CategorySlug from "components/CategorySlug";
import Header from "components/Header";
import App from "components/App";

const Page = ({ slug }) => (
  <App className="App Homepage">
    <div>
      <Header />
      <CategorySlug slug={slug} />
      <Footer />
    </div>
  </App>
);

export default Page;
