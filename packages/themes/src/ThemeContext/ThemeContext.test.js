import { mount } from "enzyme";
import React from "react";

import ThemeContext from "./index";

const TestTheme = {
  themeId: 'test-theme',
  themeClass: 'hig--test-theme'
}

describe("ThemeContext", () => {
  describe("with a provided theme", () => {
    let renderFunction = jest.fn();
    renderFunction.mockReturnValue(null);

    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ThemeContext.Provider value={TestTheme}>
          <ThemeContext.Consumer>{renderFunction}</ThemeContext.Consumer>
        </ThemeContext.Provider>
      );
    });

    it(`provides the theme to the consumer`, () => {
      expect(renderFunction).toHaveBeenCalledWith(TestTheme);
    });
  });
});
