import renderer from "react-test-renderer";
import React from "react";

import { names } from "@hig/icons";
import { sizes } from "./sizes";
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
      .create(<Icon name={names.SHARE} size={sizes.PX_24} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when using the `svg` prop", () => {
    const svg = '<svg width="16px" height="16px" viewBox="0 0 16 16"></svg>';

    const tree = renderer
      .create(<Icon svg={svg} size={sizes.PX_16} />)
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
});
