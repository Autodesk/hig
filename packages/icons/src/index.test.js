import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import * as icons from "./index";

describe("icons/index", () => {
  Object.keys(icons)
    .filter((x) => x.match(/(24|16)$/))
    .forEach((x) => {
      const element = icons[x];
      takeSnapshotsOf(element, [
        {
          desc: "renders with no props",
          props: {
            color: "white",
          },
        },
      ]);
    });
});
