import renderer from "react-test-renderer";
import React from "react";

import Icon from "./Icon";

describe("Icon", () => {
  it("renders correctly when using the `nameOrSVG` prop", () => {
    const tree = renderer
      .create(<Icon nameOrSVG="settings" size="24" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when using the `name` prop", () => {
    const tree = renderer
      .create(<Icon name={Icon.names.SHARE} size={Icon.sizes.PX_24} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when using the `svg` prop", () => {
    const svg = `<svg width="16px" height="16px" viewBox="0 0 16 16">
      <rect x="2" y="2" width="12" height="12" fill="none" stroke="red" stroke-width="2"></rect>
    </svg>`;

    const tree = renderer
      .create(<Icon svg={svg} size={Icon.sizes.PX_16} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("when using no props", () => {
    const { warn } = console;

    beforeAll(() => {
      console.warn = jest.fn();
    });

    afterEach(() => {
      console.warn.mockReset();
    });

    afterAll(() => {
      console.warn = warn;
    });

    it("renders correctly with no props", () => {
      const tree = renderer.create(<Icon />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it("logs a warning to the console", () => {
      renderer.create(<Icon />);

      expect(console.warn).toHaveBeenCalled();
    });
  });

  describe("names", () => {
    it("is an object of constants", () => {
      expect(Icon).toHavePropertyOfConstants("names");
    });
  });

  describe("sizes", () => {
    it("is an object of constants", () => {
      expect(Icon).toHavePropertyOfConstants("sizes");
    });
  });

  describe("AVAILABLE_NAMES", () => {
    const ICON_NAME_MATCHER = /^[a-z0-9-]+$/;

    it("is frozen", () => {
      expect(Icon.AVAILABLE_NAMES).toBeFrozen();
    });

    it("contains icon names", () => {
      Icon.AVAILABLE_NAMES.forEach(name => {
        expect(name).toMatch(ICON_NAME_MATCHER);
      });
    });
  });
});
