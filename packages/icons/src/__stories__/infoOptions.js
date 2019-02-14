import React from "react";
import RichText from "@hig/rich-text";
import readme from "../../README.md";

export default {
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
