import React from "react";
import { storiesOf } from "@storybook/react";
import { Settings24 } from "@hig/icons";
import Button, {
  availableSizes,
  availableTypes,
  availableWidths
} from "../index";

const buttonVariations = props =>
  availableSizes.map(size =>
    availableTypes.map(type =>
      availableWidths.map(width => {
        const identifier = `${type} ${size} ${width}`;

        return (
          <div>
            <Button
              title={identifier}
              size={size}
              type={type}
              width={width}
              {...props}
            />
          </div>
        );
      })
    )
  );

storiesOf("Button", module)
  .add("all variations", () => <div>{buttonVariations()}</div>)
  .add("all variations with icons", () => (
    <div>{buttonVariations({ icon: <Settings24 /> })}</div>
  ));
