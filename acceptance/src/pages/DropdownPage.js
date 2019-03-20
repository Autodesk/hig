import React from "react";
import Dropdown from "@hig/dropdown";
import Label from "@hig/label";
import Spacer from "@hig/spacer";
import ThemeRepeater from "../components/ThemeRepeater";

const states = [
  { label: "with placeholder", props: { placeholder: "example content" } },
  { label: "disabled", props: { disabled: true } }
];
const variants = ["line", "box"];

function DropdownPage() {
  const options = ["Option 1", "Option 2"];

  return (
    <ThemeRepeater>
      {({ id }) => {
        return (
          <div>
            {variants.map(variant => {
              return states.map(({ label, props }) => {
                const key = id + label;
                return (
                  <div key={key}>
                    <Label htmlFor={key} disabled={props.disabled}>
                      {label}
                    </Label>
                    <Dropdown id={key} options={options} variant={variant} {...props} ></Dropdown>
                    <Spacer spacing="l" />
                  </div>
                );
              });
            })}
          </div>
        );
      }}
    </ThemeRepeater>
  );
}

export default DropdownPage;
