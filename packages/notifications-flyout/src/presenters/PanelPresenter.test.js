import { ENTERED } from "react-transition-group/Transition";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

const PanelPresenter = require("./PanelPresenter").default;

describe("notifications-flyout/presenters/PanelPresenter", () => {
  takeSnapshotsOf(PanelPresenter, [
    {
      description: "renders without props",
      props: {
        innerRef: () => {}
      }
    },
    {
      description: "renders with all props",
      props: {
        children: "foobar",
        heading: "Heading",
        innerRef: () => {},
        listMaxHeight: "3000px",
        loadingTransitionState: ENTERED,
        onScroll: () => {},
        refListWrapper: () => {}
      }
    }
  ]);
});
