import { generateId } from "@hig/utils";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import TextAreaPresenter from "./TextAreaPresenter";

describe("TextArea/TextAreaPresenter", () => {
  afterEach(() => {
    generateId.mockClear();
  });

  takeSnapshotsOf(TextAreaPresenter, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        disabled: false,
        instructions: "write stuff in me",
        label: "this is a text area",
        maxLength: 2,
        minLength: 2,
        name: "text area",
        placeholder: "this is placeholder text",
        readOnly: true,
        required: "this information is required",
        type: "a type of checkbox",
        value: "value!"
      }
    }
  ]);
});
