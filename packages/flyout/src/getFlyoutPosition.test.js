import { anchorPoints } from "./anchorPoints";
import getFlyoutPosition from "./getFlyoutPosition";

describe("flyout/getFlyoutPosition", () => {
  const basicPayload = {
    anchorPoint: anchorPoints.TOP_CENTER,
    viewportRect: {
      top: 0,
      right: 1000,
      bottom: 1000,
      left: 0
    },
    panelRect: {
      width: 200,
      height: 200
    },
    actionRect: {
      width: 150,
      height: 150,
      top: 100,
      left: 100
    }
  };

  describe("calculations", () => {
    it("calculates the position of the flyout container", () => {
      const result = getFlyoutPosition(basicPayload);

      expect(result).toHaveProperty("anchorPoint", basicPayload.anchorPoint);
      expect(result).toHaveProperty("leftOffset", -25);
      expect(result).toHaveProperty("topOffset", 157);
    });

    describe("when the declared anchor point doesn't fit in the viewport", () => {
      it("provides a position for another anchor point that's in the viewport", () => {
        const result = getFlyoutPosition({
          ...basicPayload,
          anchorPoint: anchorPoints.RIGHT_CENTER,
          actionRect: {
            ...basicPayload.actionRect,
            top: 0,
            left: 0
          }
        });

        expect(result).toHaveProperty("anchorPoint", anchorPoints.TOP_LEFT);
        expect(result).toHaveProperty("leftOffset", 0);
        expect(result).toHaveProperty("topOffset", 157);
      });

      describe("when none of the anchor points fit in the viewport", () => {
        it("provides a position at the declared anchor point", () => {
          const result = getFlyoutPosition({
            ...basicPayload,
            viewportRect: {
              top: 50,
              right: 51,
              bottom: 51,
              left: 50
            }
          });

          expect(result).toHaveProperty(
            "anchorPoint",
            basicPayload.anchorPoint
          );
          expect(result).toHaveProperty("leftOffset", -25);
          expect(result).toHaveProperty("topOffset", 157);
        });
      });
    });
  });
});
