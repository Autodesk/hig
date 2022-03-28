import React from "react";
import renderer from "react-test-renderer";
import Table from "./Table";
import SAMPLE_TABLE_OBJECT from "./__fixtures__/sampleTableObject";

describe("table/Table", () => {
  it("renders default Table", () => {
    const wrapper = <Table tableObject={SAMPLE_TABLE_OBJECT} />;
    const tree = renderer.create(wrapper).toJSON();
    expect(Boolean(tree)).toBe(true);
  });

  it("renders Table with alternating background", () => {
    const wrapper = <Table tableObject={SAMPLE_TABLE_OBJECT} alternateBg />;
    const tree = renderer.create(wrapper).toJSON();
    expect(Boolean(tree)).toBe(true);
  });
});
