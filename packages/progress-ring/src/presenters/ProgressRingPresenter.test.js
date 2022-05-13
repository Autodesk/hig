import React from "react";
import renderer from "react-test-renderer";
import ProgressRingPresenter from "./ProgressRingPresenter";

describe("progress-ring/presenters/ProgressRingPresenter", () => {
  [
    {
      description: "renders without props",
      props: {},
    },
    {
      description: "renders with all props",
      props: {
        percentComplete: 33,
        size: "s",
      },
    },
    {
      description: "renders with surface prop",
      props: {
        percentComplete: 33,
        surface: 200,
      },
    },
    {
      description: "renders with mask prop",
      props: {
        percentComplete: 33,
        mask: "red",
      },
    },
    {
      description: "renders with both surface & mask props",
      props: {
        percentComplete: 33,
        surface: 200,
        mask: "red",
      },
    },
  ].forEach(({ description, props: { ...otherProps } }) => {
    it(description, () => {
      const presenter = <ProgressRingPresenter {...otherProps} />;
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
