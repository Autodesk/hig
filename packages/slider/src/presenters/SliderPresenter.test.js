import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import SliderPresenter from "./SliderPresenter";

describe("Slider/presenters/SliderPresenter", () => {
  takeSnapshotsOf(SliderPresenter, [{ desc: "renders", props: {} }]);
});
