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

const createNodeMock = () => ({
  scrollLeft: 0,
  scrollTop: 0
});

const render = node => renderer.create(node, { createNodeMock });

describe("Table", () => {
  it("renders correctly", () => {
    const tree = render(<TestTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive className", () => {
    const tree = render(<TestTable className="custom-class" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive style", () => {
    const tree = render(<TestTable style={{ color: "red" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive children", () => {
    const tree = render(
      <TestTable>
        <Table.Column key="code" dataKey="code" width={30} />
        <Table.Column key="name" dataKey="name" width={30} />
      </TestTable>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive empty data", () => {
    const tree = render(<TestTable data={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can specific a different rowKey", () => {
    const tree = render(<TestTable rowKey="code" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive width", () => {
    const tree = render(<TestTable width={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive height", () => {
    const tree = render(<TestTable height={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive rowHeight", () => {
    const tree = render(<TestTable rowHeight={30} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive headerHeight", () => {
    const tree = render(<TestTable headerHeight={30} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can be set to fixed", () => {
    const tree = render(<TestTable fixed />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can be set to disabled", () => {
    const tree = render(<TestTable disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can hide the header", () => {
    const tree = render(<TestTable hideHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can freeze rows", () => {
    const tree = render(<TestTable frozenRowCount={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive an renderEmpty callback", () => {
    const tree = render(<TestTable renderEmpty={CALLBACK} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive an renderHeader callback", () => {
    const tree = render(<TestTable renderHeader={CALLBACK} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive an renderRow callback", () => {
    const tree = render(<TestTable renderRow={CALLBACK} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive headerClassName", () => {
    const tree = render(<TestTable headerClassName="custom-class" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive headerStyle", () => {
    const tree = render(<TestTable headerStyle={{ color: "red" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive rowClassName", () => {
    const tree = render(<TestTable rowClassName="custom-class" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive rowStyle", () => {
    const tree = render(<TestTable rowStyle={{ color: "red" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive expandColumnKey", () => {
    const tree = render(<TestTable expandColumnKey="code" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive defaultExpandedRowKeys", () => {
    const tree = render(<TestTable defaultExpandedRowKeys={["1"]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("table can receive expandedRowKeys", () => {
    const tree = render(<TestTable expandedRowKeys={["1"]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
