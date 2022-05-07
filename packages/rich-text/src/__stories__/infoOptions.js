import React from "react";
import RichText from "../index";
import readme from "../../README.md";

export default {
  propTables: [RichText],
  source: true,
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />,
};
