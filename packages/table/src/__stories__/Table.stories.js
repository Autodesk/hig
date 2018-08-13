import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, number } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import faker from "faker";

import generateColumns from "./generateColumns";
import generateData from "./generateData";

import Table, { AutoResizer } from "../index";

const tableStories = storiesOf("Table", module);

const columns = generateColumns(10);
const data = generateData(columns, 200);

const complexColumns = [
  {
    key: "name",
    title: "Name",
    dataKey: "name",
    width: 200,
    sortable: true,
    frozen: Table.Column.FrozenDirection.LEFT,
    resizable: true
  },
  {
    key: "gender",
    title: "F/M",
    dataKey: "gender",
    // eslint-disable-next-line react/prop-types
    renderCell: ({ cellData: gender }) => (
      <div
        style={{
          backgroundColor: gender === "male" ? "lightblue" : "pink",
          color: "white",
          borderRadius: 3,
          width: "20px",
          height: "20px",
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        {gender === "male" ? "♂" : "♀"}
      </div>
    ),
    width: 60,
    align: "center",
    sortable: true
  },
  {
    key: "birthday",
    title: "Birthday",
    dataKey: "birthday",
    dataGetter: ({ column, rowData }) => rowData[column.dataKey].toDateString(),
    width: 150,
    sortable: true
  },
  {
    key: "description",
    title: "Description",
    dataKey: "description",
    width: 300,
    sortable: true,
    resizable: true
  },
  {
    key: "email",
    title: "Email",
    dataKey: "email",
    width: 200,
    sortable: true,
    resizable: true
  },
  {
    key: "country",
    title: "Country",
    dataKey: "country",
    width: 100,
    sortable: true,
    resizable: true
  },
  {
    key: "address",
    title: "Address",
    dataKey: "address.street",
    width: 200,
    resizable: true
  }
];

const complexData = new Array(200).fill(0).map(() => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  gender: faker.random.boolean() ? "male" : "female",
  birthday: faker.date.past(),
  description: faker.lorem.sentence(),
  email: faker.internet.email(),
  country: faker.address.country(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
  }
}));

tableStories.add(
  "default",
  withInfo()(() => (
    <Table width={800} height={400} columns={columns} data={data} />
  ))
);

tableStories.add(
  "complex",
  withInfo()(() => (
    <Table
      fixed={boolean("fixed", true)}
      frozenRowCount={number("frozenRowCount", 1)}
      width={800}
      height={400}
      columns={complexColumns}
      data={complexData}
      onColumnSort={action("onColumnSort")}
      onColumnResize={action("onColumnResize")}
    />
  ))
);

tableStories.add(
  "with auto-resizer",
  withInfo()(() => (
    <AutoResizer>
      {({ width, height }) => (
        <Table width={width} height={height} columns={columns} data={data} />
      )}
    </AutoResizer>
  ))
);
