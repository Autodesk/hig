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

  function oldProps(type, ...args) {
    const otherDetails = args.length ? ` with ${args.join(" ")}` : "";
    return {
      type,
      text: `${type} type should render nicely${otherDetails}.`
    };
  }

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
    },

    // deprecated API tests
    {
      description: "renders text",
      props: oldProps("text")
    },
    {
      description: "renders with a type",
      props: oldProps("h1")
    },
    {
      description: "renders bold",
      props: Object.assign(oldProps("text", "bold"), { bold: true })
    },
    {
      description: "renders disabled",
      props: Object.assign(oldProps("text", "disabled"), { disabled: true })
    },
    {
      description: "renders with a size",
      props: Object.assign(oldProps("text", "size small"), { size: "small" })
    },
    {
      description: "renders with a color",
      props: Object.assign(oldProps("text", "color hig-cool-gray-70"), {
        color: "hig-cool-gray-70"
      })
    },
    {
      description: "renders with an opacity",
      props: Object.assign(oldProps("text", "opacity 0.3"), { opacity: 0.3 })
    }
  ]);
});
