/*global jest expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import renderer from "react-test-renderer";
import Category from "pages/category/Category";
import CategoryContainer from "pages/category";

jest.mock("components/App", () => ({ children }) => (
  <div name="App">{children}</div>
));
jest.mock("components/Header", () => () => <div name="Header" />);
jest.mock("components/Footer", () => () => <div name="Footer" />);
jest.mock("components/CategorySlug", () => () => <div name="CategorySlug" />);

describe("Category Page", () => {
  test("should be rendered", done => {
    const component = renderer.create(<Category />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
});

describe("Category Container", () => {
  test("should be rendered", done => {
    const component = renderer.create(<CategoryContainer />);
    expect(component).toMatchSnapshot();
    done();
  });
  test("should init slug", done => {
    const props = { query: { slug: "TEST" } };
    CategoryContainer.getInitialProps(props).then(result => {
      expect(result.initialProps).toEqual({ slug: "TEST" });
      done();
    });
  });
});
