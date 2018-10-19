import { mount } from "enzyme";
import React from "react";

import HIGLightTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";

import ThemeContext from "./index";

const TestTheme = {
  id: "test-theme",
  className: "hig--test-theme",
  resolvedRoles: {}
};

describe("ThemeContext", () => {
  describe("with a provided theme", () => {
    const renderFunction = jest.fn();

    beforeEach(() => {
      renderFunction.mockReset();
      renderFunction.mockReturnValue(null);
    });

    it("provides the theme to the consumer", () => {
      mount(
        <ThemeContext.Provider value={TestTheme}>
          <ThemeContext.Consumer>{renderFunction}</ThemeContext.Consumer>
        </ThemeContext.Provider>
      );

      expect(renderFunction).toHaveBeenCalledWith(TestTheme);
    });

    it("provides the default theme without a provider", () => {
      mount(<ThemeContext.Consumer>{renderFunction}</ThemeContext.Consumer>);

      expect(renderFunction).toHaveBeenCalledWith(HIGLightTheme);
    });
  });
});
