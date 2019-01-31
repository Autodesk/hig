import { mount } from "enzyme";
import React from "react";

import WebLightTheme from "@hig/theme-data/build/json/webLightMediumDensityTheme/theme.json";

import * as createThemeProxy from "./createThemeProxy";
import ThemeContext from "./index";

const TestTheme = {
  metadata: {
    id: "test-theme",
    className: "hig--test-theme"
  },
  resolvedRoles: {}
};

describe("ThemeContext", () => {
  const renderFunction = jest.fn();

  beforeEach(() => {
    renderFunction.mockReset();
    renderFunction.mockReturnValue(null);
  });

  describe("when debugging", () => {
    it("passes what createThemeProxy returns to render function", () => {
      jest
        .spyOn(createThemeProxy, "default")
        .mockImplementation(() => "themeProxy");

      mount(
        <ThemeContext.Provider value={TestTheme}>
          <ThemeContext.Consumer>{renderFunction}</ThemeContext.Consumer>
        </ThemeContext.Provider>
      );

      expect(renderFunction).toHaveBeenCalledWith("themeProxy");
    });
  });

  describe("in production", () => {
    const nodeEnv = process.env.NODE_ENV;

    beforeEach(() => {
      process.env.NODE_ENV = "production";
    });

    afterEach(() => {
      process.env.NODE_ENV = nodeEnv;
    });

    describe("with a provided theme", () => {
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

        expect(renderFunction).toHaveBeenCalledWith(WebLightTheme);
      });
    });
  });
});
