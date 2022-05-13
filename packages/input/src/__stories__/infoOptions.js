import React from "react";
import RichText from "@hig/rich-text";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import DefaultExport from "../index";
import readme from "../../README.md";

export default {
  propTables: [DefaultExport],
  propTablesExclude: [KnobbedThemeProvider],
  source: true,
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />,
};
