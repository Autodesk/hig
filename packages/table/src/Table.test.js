import React from "react";
import renderer from "react-test-renderer";
import noop from "lodash/noop";

import Table from "./Table";

const CALLBACK = noop;

const columns = [
  {
    key: "code",
    title: "code",
    dataKey: "code",
    width: 50
  },
  {
    key: "name",
    title: "name",
    dataKey: "name",
    width: 50
  }
];

const data = [
  {
    id: "1",
    code: "1",
    name: "1"
  },
  {
    id: "2",
    code: "2",
    name: "2"
  }
];

const TestTable = props => (
  <Table width={100} height={100} data={data} columns={columns} {...props} />
);

describe("Table", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TestTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive className", () => {
    const tree = renderer
      .create(<TestTable className="custom-class" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive style", () => {
    const tree = renderer
      .create(<TestTable style={{ color: "red" }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive children", () => {
    const tree = renderer
      .create(
        <TestTable>
          <Table.Column key="code" dataKey="code" width={30} />
          <Table.Column key="name" dataKey="name" width={30} />
        </TestTable>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive empty data", () => {
    const tree = renderer.create(<TestTable data={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can specific a different rowKey", () => {
    const tree = renderer.create(<TestTable rowKey="code" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive width", () => {
    const tree = renderer.create(<TestTable width={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive height", () => {
    const tree = renderer.create(<TestTable height={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive rowHeight", () => {
    const tree = renderer.create(<TestTable rowHeight={30} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive headerHeight", () => {
    const tree = renderer.create(<TestTable headerHeight={30} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can be set to fixed", () => {
    const tree = renderer.create(<TestTable fixed />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can be set to disabled", () => {
    const tree = renderer.create(<TestTable disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can hide the header", () => {
    const tree = renderer.create(<TestTable hideHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can freeze rows", () => {
    const tree = renderer.create(<TestTable frozenRowCount={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive an renderEmpty callback", () => {
    const tree = renderer.create(<TestTable renderEmpty={CALLBACK} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive an renderHeader callback", () => {
    const tree = renderer
      .create(<TestTable renderHeader={CALLBACK} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive an renderRow callback", () => {
    const tree = renderer.create(<TestTable renderRow={CALLBACK} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive headerClassName", () => {
    const tree = renderer
      .create(<TestTable headerClassName="custom-class" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive headerStyle", () => {
    const tree = renderer
      .create(<TestTable headerStyle={{ color: "red" }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive rowClassName", () => {
    const tree = renderer
      .create(<TestTable rowClassName="custom-class" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive rowStyle", () => {
    const tree = renderer
      .create(<TestTable rowStyle={{ color: "red" }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive expandColumnKey", () => {
    const tree = renderer.create(<TestTable expandColumnKey="code" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive defaultExpandedRowKeys", () => {
    const tree = renderer
      .create(<TestTable defaultExpandedRowKeys={["1"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive expandedRowKeys", () => {
    const tree = renderer
      .create(<TestTable expandedRowKeys={["1"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
