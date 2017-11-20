/*global expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import { shallow } from "enzyme";
import Homepage from "components/Homepage";
import renderer from "react-test-renderer";

const datas = [
  {
    _id: "ID",
    nom: "NOM",
    adresse: "ADRESSE",
    tel: "TEL",
    description: "DESCRIPTION"
  }
];

describe("Homepage", () => {
  test("should be rendered", done => {
    const component = renderer.create(<Homepage datas={datas} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
  test("should render datas", done => {
    const component = shallow(<Homepage datas={datas} />);
    expect(component.length).toEqual(1);
    expect(component.find("div > div[name='datas']").text()).toEqual(
      "NOM ** ADRESSE ** TEL ** DESCRIPTION"
    );
    done();
  });
});
