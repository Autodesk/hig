import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import generateColumns from "./generateColumns";
import generateData from "./generateData";

import Table from "../index";

const tableStories = storiesOf("Table", module);

const columns = generateColumns(10);
const data = generateData(columns, 200);

tableStories.add(
  "default",
  withInfo()(() => (
    <Table width={800} height={800} columns={columns} data={data} />
  ))
);
