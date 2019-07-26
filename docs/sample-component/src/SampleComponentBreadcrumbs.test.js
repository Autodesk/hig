import React from "react";
import renderer from "react-test-renderer";
import Typography from "@hig/typography";
import SampleComponentBreadcrumbs from "./SampleComponentBreadcrumbs";

describe("Breadcrumbs", () => {
  [
    {
      description: "renders with two Typography children",
      props: {
        children: [
          <Typography key="1">A</Typography>,
          <Typography key="2">B</Typography>
        ]
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <SampleComponentBreadcrumbs {...otherProps}>
          {children}
        </SampleComponentBreadcrumbs>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
