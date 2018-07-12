import React from "react";
import renderer from "react-test-renderer";

import ContributionExample from "./ContributionExample";

describe("contribution-example/ContributionExample", () => {
  it("renders", () => {
    const result = renderer.create(<ContributionExample />).toJSON();

    expect(result).toMatchSnapshot();
  });
});
