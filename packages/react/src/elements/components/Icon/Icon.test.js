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
      .create(<Icon name={Icon.names.SHARE} size={Icon.sizes.STANDARD} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when using the `svg` prop", () => {
    const svg = `<svg width="16px" height="16px" viewBox="0 0 16 16">
      <rect x="2" y="2" width="12" height="12" fill="none" stroke="red" stroke-width="2"></rect>
    </svg>`;

    const tree = renderer
      .create(<Icon svg={svg} size={Icon.sizes.SMALL} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("when using no props", () => {
    beforeAll(() => {
      console.warn = jest.fn();
    });

    afterEach(() => {
      console.warn.mockReset();
    });

    afterAll(() => {
      console.warn.mockRestore();
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
