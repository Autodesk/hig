import { mount } from "enzyme";
import React from "react";

import HIGLightTheme from "../themes/HIGLightTheme";

import ThemeContext from "./index";

const TestTheme = {
  themeId: "test-theme",
  themeClass: "hig--test-theme"
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
