import React from "react";
import RichText from "@hig/rich-text";
import "@hig/rich-text/build/index.css";

import DefaultExport from "../index";
import readme from "../../README.md";

export default {
  propTables: [DefaultExport],
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
