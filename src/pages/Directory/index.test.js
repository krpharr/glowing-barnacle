import React from "react";
import renderer from "react-test-renderer";
import Directory from "./index";

test("Directory snapshot test", () => {
  const component = renderer.create(<Directory />);
  const tree = component.toJSON;
  expect(tree).toMatchSnapshot();
});

