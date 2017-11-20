/*global expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import { shallow } from "enzyme";
import CategorySlug from "components/CategorySlug";
import renderer from "react-test-renderer";

describe("CategorySlug", () => {
  test("should be rendered", done => {
    const component = renderer.create(<CategorySlug slug="TEST" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
  test("should render slug", done => {
    const component = shallow(<CategorySlug slug="TEST" />);
    expect(component.find("div").length).toEqual(1);
    expect(component.find("div").text()).toEqual("La catégorie est : TEST");
    done();
  });
});
