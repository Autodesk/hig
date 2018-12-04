import { mount } from "enzyme";
import React from "react";

import WebLightTheme from "@hig/theme-data/build/json/webLightMediumDensityTheme/theme.json";

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

  /* eslint-disable no-console */
  describe("when debugging", () => {
    const consoleError = console.error;
    const consoleErrorMock = jest.fn();

    beforeAll(() => {
      console.error = consoleErrorMock;
    });

    beforeEach(() => {
      console.error.mockReset();
    });

    afterAll(() => {
      console.error = consoleError;
    });

    it("logs errors for unknown roles", () => {
      mount(
        <ThemeContext.Provider value={TestTheme}>
          <ThemeContext.Consumer>{renderFunction}</ThemeContext.Consumer>
        </ThemeContext.Provider>
      );

      const [[value]] = renderFunction.mock.calls;

      /* eslint-disable-next-line */
      value.unknownPropertyName;

      expect(console.error).toHaveBeenCalledWith(
        "Role unknownPropertyName does not exist"
      );
    });
  });
  /* eslint-enable no-console */

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
