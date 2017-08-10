import React from "react";
import PlaygroundSection from "../PlaygroundSection";
import { Checkbox } from "../../react-hig";

const checkboxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

function logEvent(event) {
  let messageParts = [`Checkbox triggered a ${event.type} event`];
  if (event.target.value !== undefined) {
    messageParts = messageParts.concat(`: ${event.target.value}`);
  }
  console.log(messageParts.join(""));
}

function CheckboxSection() {
  return (
    <PlaygroundSection title="Checkbox">
      <div style={checkboxStyle}>
        <Checkbox
          label="Required"
          name="tsandcs"
          value="asd"
          required="You must check this box"
        />
        <Checkbox label="Not required" name="tsandcs" value="dfdf" />
        <Checkbox label="Disabled" name="tsandcs" value="hhh" disabled={true} />
        <Checkbox label="Checked" name="tsandcs" value="werr" checked={true} />
        <Checkbox name="nolabel" value="somevalue" />
        <Checkbox
          label="Click me"
          onHover={logEvent}
          onChange={logEvent}
          onFocus={logEvent}
        />
      </div>
    </PlaygroundSection>
  );
}
export default CheckboxSection;
