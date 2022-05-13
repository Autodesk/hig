import React from "react";
import { storiesOf } from "@storybook/react";
import { Settings24 } from "@hig/icons";
import Button, { availableTypes, availableWidths } from "../index";

const buttonVariations = (props) =>
  availableTypes.map((type) =>
    availableWidths.map((width) => {
      const identifier = `${type} ${width}`;

      return (
        <div>
          <Button title={identifier} type={type} width={width} {...props} />
        </div>
      );
    })
  );

storiesOf("Button", module)
  .add("all variations", () => <div>{buttonVariations()}</div>)
  .add("all variations with icons", () => (
    <div>{buttonVariations({ icon: <Settings24 /> })}</div>
  ));
