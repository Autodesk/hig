import {
  offsetPanelHorizontal,
  offsetContainerVertical
} from "./coordinateHelpers";
import { DEFAULT_COORDINATES } from "./getCoordinates";

describe("flyout/coordinateHelpers", () => {
  describe("offsetContainerVertical", () => {
    it("vertically offsets the container", () => {
      const result = offsetContainerVertical(DEFAULT_COORDINATES, 42);

      expect(result).toMatchObject({
        anchorPoint: DEFAULT_COORDINATES.anchorPoint,
        containerPosition: {
          top: 42,
          left: 0
        },
        pointerPosition: {
          top: 0,
          left: 0
        }
      });
    });
  });

  describe("offsetPanelHorizontal", () => {
    it("horizontally offsets the panel while maintaining the equivalent pointer position", () => {
      const result = offsetPanelHorizontal(DEFAULT_COORDINATES, 42);

      expect(result).toMatchObject({
        anchorPoint: DEFAULT_COORDINATES.anchorPoint,
        containerPosition: {
          top: 0,
          left: 42
        },
        pointerPosition: {
          top: 0,
          left: -42
        }
      });
    });
  });
});
