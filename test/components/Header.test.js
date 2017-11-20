/*global expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import Header from "components/Header";
import renderer from "react-test-renderer";

describe("Header", () => {
  test("Header should be rendered", done => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
});
