import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import InputPresenter from "./InputPresenter";

describe("Dropdown/presenters/InputPresenter", () => {
  const rendererOptions = {
    createNodeMock(element) {
      return document.createElement(element.type);
    },
  };
  const cases = [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with all props (that dropdown uses)",
      props: {
        type: "button",
        readOnly: true,
        id: "id",
        placeholder: "placeholder",
        disabled: true,
        required: "this is required",
        onBlur: () => {},
        onFocus: () => {},
        onClick: () => {},
      },
    },
  ];

  takeSnapshotsOf(InputPresenter, cases, rendererOptions);
});
