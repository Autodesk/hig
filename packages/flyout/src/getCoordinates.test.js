import { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "./anchorPoints";
import getCoordinates from "./getCoordinates";

describe("flyout/getCoordinates", () => {
  const basicPayload = {
    anchorPoint: anchorPoints.TOP_CENTER,
    fallbackAnchorPoints: AVAILABLE_ANCHOR_POINTS,
    viewportRect: {
      top: 0,
      right: 1000,
      bottom: 1000,
      left: 0,
    },
    panelRect: {
      width: 200,
      height: 200,
    },
    actionRect: {
      width: 150,
      height: 150,
      top: 100,
      left: 100,
    },
    pointerRect: {
      width: 12,
      height: 24,
    },
  };

  describe("calculations", () => {
    it("calculates the position of the flyout container", () => {
      const result = getCoordinates(basicPayload);

      expect(result).toMatchSnapshot();
    });

    describe("when the declared anchor point doesn't fit in the viewport", () => {
      it("provides a position for another anchor point that's in the viewport", () => {
        const result = getCoordinates({
          ...basicPayload,
          anchorPoint: anchorPoints.RIGHT_CENTER,
          actionRect: {
            ...basicPayload.actionRect,
            top: 0,
            left: 0,
          },
        });

        expect(result).toMatchSnapshot();
      });

      describe("when none of the anchor points fit in the viewport", () => {
        it("provides a position at the declared anchor point", () => {
          const result = getCoordinates({
            ...basicPayload,
            viewportRect: {
              top: 50,
              right: 51,
              bottom: 51,
              left: 50,
            },
          });

          expect(result).toMatchSnapshot();
        });
      });
    });
  });
});
