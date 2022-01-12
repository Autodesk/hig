import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

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

  describe("sub-component rendering", () => {
    const renderedComponents = [
      "BannerAnimator",
      "BannerContainer",
      "BannerPresenter"
    ];

    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Banner />);
    });

    renderedComponents.forEach(componentName => {
      describe(componentName, () => {
        it(`renders a \`${componentName}\` component`, () => {
          expect(wrapper.find(componentName)).toBePresent();
        });
      });
    });
  });

  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {}
      },
      {
        description: "renders with custom stylesheet",
        props: {
          stylesheet: styles => ({
            ...styles,
            banner: {
              ...styles.banner,
              backgroundColor: "red"
            }
          })
        }
      },
      {
        description: "renders with custom className",
        props: {
          className: "custom"
        }
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Banner {...otherProps}>{children}</Banner>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
