/*global expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import Footer from "components/Footer";
import renderer from "react-test-renderer";

describe("Footer", () => {
  test("should be rendered", done => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
});
