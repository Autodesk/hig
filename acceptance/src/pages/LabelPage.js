import React from "react";
import Input from "@hig/input";
import Label from "@hig/label";
import Spacer from "@hig/spacer";

import ThemeRepeater from "../components/ThemeRepeater";
import Text from "../components/Text";

const states = [
  { label: "interactive", props: {} },
  { label: "with placeholder", props: { placeholder: "example content" } },
  { label: "disabled", props: { disabled: true } }
];

const variants = ["side", "top"];

function LabelPage() {
  return (
    <ThemeRepeater>
      {({ id }) => {
        return (
          <div>
            {variants.map(variant => {
              return (
                <div key={variant}>
                  <Text>{variant}</Text>
                  {states.map(({ label, props }) => {
                    const key = id + label + variant;
                    return (
                      <div key={key}>
                        <div style={{ display: variant === "side" ? "flex" : "block", alignItems: "center"}}>
                          <Label htmlFor={key} disabled={props.disabled} variant={variant}>
                            {label}
                          </Label>
                          <Spacer spacing="s" />
                          <Input id={key} {...props} variant="box" />
                          <Spacer spacing="xs" />
                        </div>
                        <Spacer />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default LabelPage;
