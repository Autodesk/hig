import { COLOR, LENGTH } from "../../consts/types";

export default {
  "textArea.minHeight": {
    type: LENGTH,
    value: "250px",
  },
  "textArea.borderColor": {
    type: COLOR,
    value: {
      ref: "input.borderColor",
    },
  },
};
