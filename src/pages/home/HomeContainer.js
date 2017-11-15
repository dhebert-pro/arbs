import axios from "axios";

import Home from "./Home";

Home.getInitialProps = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(result => {
      return { datas: result.data };
    });
};

export default Home;
