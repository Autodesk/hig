import React from "react";
import { RichText } from "hig-react";

import Banner from "../Banner";
import readme from "../../README.md";

export default {
  propTables: [Banner],
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
