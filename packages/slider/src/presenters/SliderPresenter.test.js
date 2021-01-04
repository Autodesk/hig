import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import SliderPresenter from "./SliderPresenter";

describe("Slider/presenters/SliderPresenter", () => {
  takeSnapshotsOf(SliderPresenter, [{ desc: "renders", props: {} }]);
  takeSnapshotsOf(SliderPresenter, [
    { desc: "renders disabled", props: { disabled: true } }
  ]);
  takeSnapshotsOf(SliderPresenter, [
    { desc: "renders focused", props: { hasFocus: true } }
  ]);
  takeSnapshotsOf(SliderPresenter, [
    { desc: "renders hovered", props: { hasHover: true } }
  ]);
  takeSnapshotsOf(SliderPresenter, [
    { desc: "renders pressed", props: { isPressed: true } }
  ]);
  takeSnapshotsOf(SliderPresenter, [
    {
      desc: "renders discrete slider",
      props: { variant: "discrete", min: 0, max: 5, step: 1 }
    }
  ]);
  takeSnapshotsOf(SliderPresenter, [
    {
      desc: "renders discrete slider with step 0",
      props: { variant: "discrete", step: 0 }
    }
  ]);
});
