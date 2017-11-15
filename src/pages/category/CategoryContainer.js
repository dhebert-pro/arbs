import Category from "./Category";

Category.getInitialProps = ({ query }) => {
  return { slug: query.slug };
};

export default Category;
