import React from "react";
import RichText from "@hig/rich-text";

import DefaultExport from "../index";
import readme from "../../README.md";
import { ThemeContext } from "@hig/themes";

export default {
  propTables: [DefaultExport],
  propTablesExclude: [ThemeContext.Provider],
  source: true,
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
