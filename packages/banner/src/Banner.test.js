import { mount } from "enzyme";
import React from "react";

import Banner from "./Banner";

describe("banner/Banner", () => {
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
