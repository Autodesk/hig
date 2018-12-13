import React from "react";
import { shallow } from "enzyme";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import Typography from "./Typography";

describe("Typography", () => {
  function newProps(variant, ...args) {
    const variantDetails = variant ? `${variant} variant` : "Default";
    const otherDetails = args.length ? ` with ${args.join(" ")}` : "";
    return {
      variant,
      children: `${variantDetails} should render nicely${otherDetails}.`
    };
  }

  it("renders", () => {
    expect(
      shallow(<Typography>It should render nicely</Typography>)
    ).toMatchObject(/It should render nicely/);
  });

  takeSnapshotsOf(Typography, [
    // new API tests
    { description: "renders default Typography", props: newProps() },
    {
      description: "renders Typography with align and fontWeight props",
      props: Object.assign(
        newProps("body", "align center and fontWeight bold"),
        { align: "center", fontWeight: "bold" }
      )
    },
    {
      description: "renders body variant Typography",
      props: newProps("body")
    },
    {
      description: "renders caption variant Typography",
      props: newProps("caption")
    },
    {
      description: "renders h1 variant Typography",
      props: newProps("h1")
    },
    {
      description: "renders h2 variant Typography",
      props: newProps("h2")
    },
    {
      description: "renders h3 variant Typography",
      props: newProps("h3")
    }
  ]);
});
