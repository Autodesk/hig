import React from "react";
import TextArea from "@hig/text-area";
import Label from "@hig/label";
import Spacer from "@hig/spacer";

import ThemeRepeater from "../components/ThemeRepeater";
import Text from "../components/Text";

const states = [
  { label: "interactive", props: {} },
  { label: "with placeholder", props: { placeholder: "example content" } },
  { label: "disabled", props: { disabled: true } }
];

const variants = ["line", "box"];

function InputPage() {
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
                        <div style={{}}>
                          <Label htmlFor={key} disabled={props.disabled}>
                            {label}
                          </Label>
                          <TextArea id={key} {...props} variant={variant} />
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

export default InputPage;
