import { mount } from "enzyme";
import React from "react";

import Banner from "./Banner";

describe("banner/Banner", () => {
  const exposedComponents = ["Action", "Interactions", "Presenter"];
  const componentMatcher = expect.any(Function);

  exposedComponents.forEach(componentName => {
    describe(componentName, () => {
      it(`exposes the \`${componentName}\` component`, () => {
        expect(Banner).toHaveProperty(componentName, componentMatcher);
      });
    });
  });

  describe("rendering", () => {
    const renderedComponents = [
      "BannerAnimator",
      "BannerContainer",
      "BannerPresenter"
    ];

    let wrapper;

    beforeAll(() => {
      window.requestAnimationFrame = jest.fn();
    });

    beforeEach(() => {
      wrapper = mount(<Banner />);
    });

    afterAll(() => {
      delete window.requestAnimationFrame;
    });

    renderedComponents.forEach(componentName => {
      describe(componentName, () => {
        it(`renders a \`${componentName}\` component`, () => {
          expect(wrapper.find(componentName)).toBePresent();
        });
      });
    });
  });
});
