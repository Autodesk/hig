import React from "react";
import renderer from "react-test-renderer";
import ContentPresenter from "./ContentPresenter";

describe("tabs/ContentPresenter", () => {
  const cases = [
    {
      description: "default renders",
      props: {},
    },
  ];

  cases.forEach(({ description, props }) => {
    it(description, () => {
      const wrapper = <ContentPresenter {...props}>Hello</ContentPresenter>;
      const tree = renderer.create(wrapper).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
