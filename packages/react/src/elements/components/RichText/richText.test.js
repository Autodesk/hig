import React from "react";
import { shallow } from "enzyme";
import RichText from "./index";

describe("RichText", () => {
  describe("sizes", () => {
    it("adds the appropriate size class", () => {
      const withoutSize = shallow(<RichText>Rich content</RichText>);
      expect(withoutSize.find(".hig__rich-text")).not.toHaveClassName(
        "hig__rich-text--small"
      );

      const withSize = shallow(<RichText size="small">Rich content</RichText>);
      expect(withSize.find(".hig__rich-text")).toHaveClassName(
        "hig__rich-text--small"
      );
    });
  });
});
