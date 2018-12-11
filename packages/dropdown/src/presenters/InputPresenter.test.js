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
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props (that dropdown uses)",
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
        onFocus: () => {},
        onClick: () => {}
      }
    }
  ];

  takeSnapshotsOf(InputPresenter, cases, rendererOptions);
});
