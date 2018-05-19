import React from "react";
import Button from "@hig/button";
import RichText from "@hig/rich-text";

export default [
  {
    description: "default",
    getProps: () => ({
      anchorPoint: "right-top",
      content: (
        <RichText>
          <h3>Important flyout information</h3>
          <p>Any content can go in here.</p>
        </RichText>
      ),
      children: <Button title="Open flyout" />
    })
  }
];
