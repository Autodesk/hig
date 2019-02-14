import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "../Dropdown";

import "./Dropdown.stories-test.scss";

storiesOf("Dropdown", module).add("default", () => (
  <Dropdown options={[1, 2, 3]} placeholder={1} />
));
