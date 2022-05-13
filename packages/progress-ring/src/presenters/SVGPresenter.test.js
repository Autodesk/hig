import React from "react";
import renderer from "react-test-renderer";
import SVGPresenter from "./SVGPresenter";

describe("progress-ring/presenters/SVGPresenter", () => {
  [
    {
      description: "renders with all props",
      props: {
        width: 72,
        height: 72,
        original: 72,
        svgData: [],
      },
    },
  ].forEach(({ description, props: { ...otherProps } }) => {
    it(description, () => {
      const presenter = <SVGPresenter {...otherProps} />;
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
