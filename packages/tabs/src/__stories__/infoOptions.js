import React from "react";
import RichText from "@hig/rich-text";

import Tabs, { Tab } from "../index";
import readme from "../../README.md";

export default {
  propTables: [Tabs, Tab],
  propTablesExclude: [RichText],
  source: true,
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
