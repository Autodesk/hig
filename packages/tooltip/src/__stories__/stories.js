import React from "react";
import Button from "@hig/button";

import TextPresenter from "../presenters/TextPresenter";

export default [
  {
    description: "default",
    getProps: () => ({
      anchorPoint: "top-center",
      content: (
        <TextPresenter>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque.
        </TextPresenter>
      ),
      children: <Button title="Open Tooltip" />,
    }),
  },
];
