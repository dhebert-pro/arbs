import React from "react";
import Footer from "components/Footer";
import Homepage from "components/Homepage";
import Header from "components/Header";
import App from "components/App";
import glamorous from "glamorous";

const titleStyles = {
  color: "red"
};

const Title = glamorous.div(titleStyles);

const Page = ({ posts }) => (
  <App>
    <div>
      <Header />
      <Title>Ceci est un titre</Title>
      <Homepage datas={posts} />
      <Footer />
    </div>
  </App>
);

export default Page;
