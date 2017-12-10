/*global jest expect test describe:true */
/*eslint no-undef: "error"*/
import React from "react";
import renderer from "react-test-renderer";
import Document from "pages/_document";

describe("Category Page", () => {
  test("should be rendered", done => {
    const document = require.requireActual("next/document");
    document.Head = jest.fn(({ children }) => (
      <div name="Head">{children}</div>
    ));
    document.Main = jest.fn(() => <div name="Main" />);
    document.NextScript = jest.fn(() => <div name="NextScript" />);
    //With Id
    const componentWithId = renderer.create(
      new Document({ __NEXT_DATA__: {}, ids: "TEST" }).render()
    );
    let tree = componentWithId.toJSON();
    expect(tree).toMatchSnapshot();
    //Without Id
    const component = renderer.create(<Document />);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
  test("should get posts", done => {
    const renderPage = () => ({ html: "test" });
    Document.getInitialProps({ renderPage }).then(result => {
      expect(result).toEqual({ html: "test", ids: [], css: "", rules: [] });
      done();
    });
  });
});
