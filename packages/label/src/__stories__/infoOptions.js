import React from "react";
import RichText from "@hig/rich-text";
import "@hig/rich-text/build/index.css";

import { ThemeContext } from "@hig/themes-poc";

import DefaultExport from "../index";
import readme from "../../README.md";

export default {
  propTables: [DefaultExport],
  propTablesExclude: [ThemeContext.Provider],
  source: true,
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
