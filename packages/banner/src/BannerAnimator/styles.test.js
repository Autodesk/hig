import {
  getWrapperReset,
  getInnerWrapperReset,
  getWrapperTransition,
  getInnerWrapperExpandingTransition,
  getInnerWrapperCollapsingTransition,
  getWrapperExpandedHeight,
  getWrapperCollapsedHeight,
  getInnerWrapperCollapsedTransform,
  getInnerWrapperExpandingTransform,
} from "./styles";
import { positions } from "./positions";

describe("banner/BannerAnimator/styles", () => {
  const defaultParams = {
    innerWrapper: undefined,
    hasBounce: true,
    hasPush: true,
    position: positions.TOP,
  };

  describe("getWrapperReset", () => {
    it("returns an object to reset wrapper styles", () => {
      const result = getWrapperReset(defaultParams);

      expect(result).toMatchObject({
        height: "",
        overflow: "",
        transition: "",
      });
    });
  });

  describe("getInnerWrapperReset", () => {
    it("returns an object to reset inner wrapper styles", () => {
      const result = getInnerWrapperReset(defaultParams);

      expect(result).toMatchObject({
        transform: "",
        transition: "",
      });
    });
  });

  describe("getWrapperTransition", () => {
    it("returns the correct value with the given default params", () => {
      const result = getWrapperTransition(defaultParams);

      expect(result).toEqual("300ms height ease");
    });
  });

  describe("getInnerWrapperExpandingTransition", () => {
    it("returns the correct value with the given default params", () => {
      const result = getInnerWrapperExpandingTransition(defaultParams);

      expect(result).toEqual(
        "300ms transform cubic-bezier(0.175, 0.885, 0.32, 1.275) 300ms"
      );
    });
  });

  describe("getInnerWrapperCollapsingTransition", () => {
    it("returns the correct value with the given default params", () => {
      const result = getInnerWrapperCollapsingTransition(defaultParams);

      expect(result).toEqual("300ms transform ease");
    });
  });

  describe("getWrapperExpandedHeight", () => {
    it("returns the correct value with the given default params", () => {
      const result = getWrapperExpandedHeight(defaultParams);

      expect(result).toEqual("70px");
    });
  });

  describe("getWrapperCollapsedHeight", () => {
    it("returns the correct value with the given default params", () => {
      const result = getWrapperCollapsedHeight(defaultParams);

      expect(result).toEqual("0");
    });
  });

  describe("getInnerWrapperCollapsedTransform", () => {
    it("returns the correct value with the given default params", () => {
      const result = getInnerWrapperCollapsedTransform(defaultParams);

      expect(result).toEqual("translateY(-50px)");
    });
  });

  describe("getInnerWrapperExpandingTransform", () => {
    it("returns the correct value with the given default params", () => {
      const result = getInnerWrapperExpandingTransform(defaultParams);

      expect(result).toEqual("");
    });
  });
});
