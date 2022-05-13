import {
  dislocateContainer,
  offsetContainerHorizontal,
  offsetContainerVertical,
  offsetPanelHorizontal,
} from "./coordinateHelpers";
import { AVAILABLE_ANCHOR_POINTS } from "./anchorPoints";
import { DEFAULT_COORDINATES } from "./getCoordinates";

describe("flyout/coordinateHelpers", () => {
  describe("offsetContainerVertical", () => {
    it("vertically offsets the container", () => {
      const result = offsetContainerVertical(DEFAULT_COORDINATES, 42);

      expect(result).toMatchSnapshot();
    });
  });

  describe("offsetContainerHorizontal", () => {
    it("horizontally offsets the container", () => {
      const result = offsetContainerHorizontal(DEFAULT_COORDINATES, 42);

      expect(result).toMatchSnapshot();
    });
  });

  describe("offsetPanelHorizontal", () => {
    it("horizontally offsets the panel while maintaining the equivalent pointer position", () => {
      const result = offsetPanelHorizontal(DEFAULT_COORDINATES, 42);

      expect(result).toMatchSnapshot();
    });
  });

  describe("dislocateContainer", () => {
    AVAILABLE_ANCHOR_POINTS.forEach((anchorPoint) => {
      describe(`when the anchorPoint is ${anchorPoint}`, () => {
        it("moves the container away from the target in the respective direction", () => {
          const coordinates = { ...DEFAULT_COORDINATES, anchorPoint };
          const result = dislocateContainer(coordinates, 42);

          expect(result).toMatchSnapshot();
        });
      });
    });
  });
});
