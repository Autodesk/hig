import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import NumericInput from "./NumericInput";

describe("numeric-input/NumericInput", () => {
  takeSnapshotsOf(NumericInput, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with disabled",
      props: {
        disabled: true
      }
    },
    {
      desc: "renders with variant",
      props: {
        variant: "box"
      }
    },
    {
      desc: "renders with default value",
      props: {
        defaultValue: 10
      }
    },
    {
      desc: "renders with custom stylesheet",
      props: {
        stylesheet: styles => ({
          ...styles,
          spinner: {
            ...styles.spinner,
            backgroundColor: "pink"
          }
        })
      }
    },
    {
      desc: "renders with custom className",
      props: {
        className: "custom"
      }
    }
  ]);
});
