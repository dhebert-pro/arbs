/*global jest expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Category from "pages/category";

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
  test("should get posts", done => {
    const component = shallow(<Category />);
    expect(component.find("div").length).toEqual(1); //FAILED
    done();
  });
});
