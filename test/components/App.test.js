/*global expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import renderer from "react-test-renderer";

describe("App", () => {
  test("should be rendered", done => {
    const component = renderer.create(
      <App>
        <div>TEST</div>
      </App>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
  test("should render children", done => {
    const component = shallow(<App>TEST</App>);
    expect(component.find("div").length).toEqual(1);
    expect(component.find("div").text()).toEqual("TEST");
    done();
  });
});
