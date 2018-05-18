import React from "react";
import Button from "@hig/button";

export default [
  {
    description: "default",
    getProps: () => ({
      anchorPoint: "top-center",
      content: "Testing tooltip",
      children: <Button title="Open Tooltip" />
    })
  }
];
