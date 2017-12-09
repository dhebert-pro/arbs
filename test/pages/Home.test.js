/*global jest expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import renderer from "react-test-renderer";
import Home from "pages/Home";
import HomeContainer from "pages";

jest.mock("components/App", () => ({ children }) => (
  <div name="App">{children}</div>
));
jest.mock("components/Header", () => () => <div name="Header" />);
jest.mock("components/Footer", () => () => <div name="Footer" />);
jest.mock("components/Homepage", () => ({ datas }) => (
  <div name="Homepage">{JSON.stringify(datas)}</div>
));

describe("Home Page", () => {
  test("should be rendered", done => {
    const component = renderer.create(<Home posts="TEST" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
});

describe("Home Container", () => {
  test("should be rendered", done => {
    const component = renderer.create(<HomeContainer />);
    expect(component).toMatchSnapshot();
    done();
  });
  test("should get posts", done => {
    const configureStore = require.requireActual("store/configureStore");
    configureStore.fetchPosts = jest.fn(() => () => "TEST");
    HomeContainer.getInitialProps().then(result => {
      expect(result.initialProps).toEqual("TEST");
      done();
    });
  });
});
