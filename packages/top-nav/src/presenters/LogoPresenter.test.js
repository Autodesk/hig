import React from "react";
import renderer from "react-test-renderer";

import LogoPresenter from "./LogoPresenter";

describe("top-nav/presenters/LogoPresenter", () => {
  const cases = [
    {
      description: "renders without props",
      props: {},
    },
    {
      description: "renders with child components",
      props: {
        children: <span data-test="child-component" />,
      },
    },
    {
      description: "renders children that are strings with semantic markup",
      props: {
        children: "Autodesk HIG",
      },
    },
    {
      description: "renders as a link when a link is provided",
      props: {
        link: "https://autodesk.com",
      },
    },
    {
      description: "renders attributes for a11y",
      props: {
        label: "a11y label",
        title: "a11y title",
      },
    },
    {
      description: "dangerously sets inner HTML",
      props: {
        dangerouslySetInnerHTML: { __html: "hi" },
      },
    },
  ];

  cases.forEach(({ description, props }) => {
    it(description, () => {
      const tree = renderer.create(<LogoPresenter {...props} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
