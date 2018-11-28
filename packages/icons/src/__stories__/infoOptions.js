import React from "react";
import RichText from "@hig/rich-text";
import "@hig/rich-text/build/index.css";
import readme from "../../README.md";

export default {
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
