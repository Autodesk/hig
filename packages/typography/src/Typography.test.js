import React from "react";
import { shallow } from "enzyme";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import Typography from "./Typography";

describe("Typography", () => {
  function props({ ...args }) {
    const { align, elementType, fontWeight, variant } = args;
    const variantDetails = variant ? `${variant} variant` : "Default";
    const definedArgs = [align, fontWeight, elementType].filter(
      (arg) => arg !== undefined
    );
    const otherDetails = definedArgs.length
      ? ` with ${definedArgs.join(" ")}`
      : "";

    return {
      ...args,
      children: `${variantDetails} should render nicely${otherDetails}.`,
    };
  }

  it("renders", () => {
    expect(
      shallow(<Typography>It should render nicely</Typography>)
    ).toMatchObject(/It should render nicely/);
  });

  takeSnapshotsOf(Typography, [
    // new API tests
    { desc: "renders default Typography", props: props() },
    {
      desc: "renders Typography with align and fontWeight props",
      props: props({ align: "center", fontWeight: "bold", variant: "body" }),
    },
    {
      desc: "renders body variant Typography",
      props: props({ variant: "body" }),
    },
    {
      desc: "renders caption variant Typography",
      props: props({ variant: "caption" }),
    },
    {
      desc: "renders h1 variant Typography",
      props: props({ variant: "h1" }),
    },
    {
      desc: "renders h2 variant Typography",
      props: props({ variant: "h2" }),
    },
    {
      desc: "renders h3 variant Typography",
      props: props({ variant: "h3" }),
    },
    {
      desc: "renders h3 variant Typography with any arbitrary semantic element",
      props: props({ variant: "h3", elementType: "figcaption" }),
    },
    {
      desc: "renders Typography with className props",
      props: props({ className: "additonal-class" }),
    },
  ]);
});
