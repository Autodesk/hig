import { mount } from "enzyme";
import React from "react";

import Banner from "./index";

describe("Banner", () => {
  describe("AVAILABLE_PLACEMENTS", () => {
    it("has a list of available placements", () => {
      expect(Banner).toHaveProperty("AVAILABLE_PLACEMENTS", expect.any(Array));
    });

    it("is frozen", () => {
      expect(Banner.AVAILABLE_PLACEMENTS).toBeFrozen();
    });
  });

  describe("AVAILABLE_TYPES", () => {
    it("has a list of available types", () => {
      expect(Banner).toHaveProperty("AVAILABLE_TYPES", expect.any(Array));
    });

    it("is frozen", () => {
      expect(Banner.AVAILABLE_TYPES).toBeFrozen();
    });
  });

  describe("placements", () => {
    it("has constants for placements", () => {
      expect(Banner).toHavePropertyOfConstants("placements");
    });
  });

  describe("types", () => {
    it("has constants for types", () => {
      expect(Banner).toHavePropertyOfConstants("types");
    });
  });

  describe("Action", () => {
    it("exposes the `Action` component", () => {
      expect(Banner).toHaveProperty("Action", expect.any(Function));
    });
  });

  describe("Interactions", () => {
    it("exposes the `Interactions` component", () => {
      expect(Banner).toHaveProperty("Interactions", expect.any(Function));
    });
  });

  describe("Presenter", () => {
    it("exposes the `Presenter` component", () => {
      expect(Banner).toHaveProperty("Presenter", expect.any(Function));
    });
  });

  describe("rendering", () => {
    beforeAll(() => {
      window.requestAnimationFrame = jest.fn();
    });

    afterAll(() => {
      delete window.requestAnimationFrame;
    });

    it("renders the `BannerAnimator`", () => {
      const wrapper = mount(<Banner />);

      expect(wrapper.find("BannerAnimator")).toBePresent();
    });

    it("renders the `BannerContainer`", () => {
      const wrapper = mount(<Banner />);

      expect(wrapper.find("BannerContainer")).toBePresent();
    });

    it("renders the `BannerPresenter`", () => {
      const wrapper = mount(<Banner />);

      expect(wrapper.find("BannerPresenter")).toBePresent();
    });
  });
});
