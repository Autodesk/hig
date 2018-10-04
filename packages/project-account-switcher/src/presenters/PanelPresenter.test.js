import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import PanelPresenter from "./PanelPresenter";

describe("project-account-switcher/presenters/PanelPresenter", () => {
  function handleRef() {}

  takeSnapshotsOf(PanelPresenter, [
    {
      description: "renders with minimal props",
      props: {
        innerRef: handleRef
      }
    },
    {
      description: "renders with all props",
      props: {
        children: "hello",
        innerRef: handleRef
      }
    }
  ]);
});
