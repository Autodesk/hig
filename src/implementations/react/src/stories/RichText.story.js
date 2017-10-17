import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
/* eslint-enable import/no-extraneous-dependencies */

import { RichText } from "../hig-react";

storiesOf("Typography elements", module).addWithInfo("All Elements", "", () => (
  <RichText>
    <h1>H1: example text</h1>
    <h2>H2: example text</h2>
    <h3>H3: example text</h3>
    <h4>H4, Sub1: example text</h4>
    <h5>H5, Sub2: example text</h5>
    <p>P: Body example text</p>
    <p>
      <b>B, Bold: Bold example text</b>
    </p>
  </RichText>
));
