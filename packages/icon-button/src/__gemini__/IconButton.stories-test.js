import React from "react";
import { storiesOf } from "@storybook/react";
import { Settings24 } from "@hig/icons";

import IconButton from "../index";

storiesOf("IconButton", module)
  .add("default", () => (
    <div>
      <IconButton title="Icon button" icon={<Settings24 />} />
      <IconButton title="Icon button" on icon={<Settings24 />} />
      <IconButton title="Icon button" disabled icon={<Settings24 />} />
      <IconButton title="Icon button" on disabled icon={<Settings24 />} />
    </div>
  ))
  .add("static", () => (
    <div>
      <IconButton variant="static" title="Icon button" icon={<Settings24 />} />
      <IconButton
        variant="static"
        title="Icon button"
        on
        icon={<Settings24 />}
      />
      <IconButton
        variant="static"
        title="Icon button"
        disabled
        icon={<Settings24 />}
      />
      <IconButton
        variant="static"
        title="Icon button"
        on
        disabled
        icon={<Settings24 />}
      />
    </div>
  ));
