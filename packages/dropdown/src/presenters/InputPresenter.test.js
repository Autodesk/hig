import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import InputPresenter from "./InputPresenter";

describe("Dropdown/presenters/InputPresenter", () => {
  const rendererOptions = {
    createNodeMock(element) {
      return document.createElement(element.type);
    }
  };
  const cases = [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with all props (that dropdown uses)",
      props: {
        type: "button",
        readOnly: true,
        id: "id",
        label: "label",
        instructions: "instructions",
        placeholder: "placeholder",
        disabled: true,
        required: "this is required",
        onBlur: () => {},
        onChange: () => {},
        onFocus: () => {},
        onClick: () => {},
        value: "the selected item's value"
      }
    }
  ];

  takeSnapshotsOf(InputPresenter, cases, rendererOptions);
});
