import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import Avatar from "elements/components/Avatar";
import Toast, { _AVAILABLE_STATUSES } from "elements/components/Toast";

storiesOf("Toast", module)
  .add("default", () => (
    <Toast
      onDismiss={action("Toast dismissed")}
      status={select("Status", _AVAILABLE_STATUSES)}
      showStatusIcon={boolean("Show Status Icon", true)}
    >
      {text(
        "Children",
        "It's probably useful in the long run to default to showing multiple lines of toast. Let's say, three?"
      )}
    </Toast>
  ))

  .add("with an avatar", () => (
    <Toast
      image={<Avatar name="Jon Snow" size="large-48" />}
      onDismiss={action("Toast dismissed")}
      status={select("Status", _AVAILABLE_STATUSES)}
      showStatusIcon={boolean("Show Status Icon", true)}
    >
      {text(
        "Children",
        "It's probably useful in the long run to default to showing multiple lines of toast. Let's say, three?"
      )}
    </Toast>
  ))

  .add("with a thumbnail", () => (
    <Toast
      image={
        <div style={{ width: "48px", height: "48px" }}>
          <img src="http://placekitten.com/g/48/48" alt="Place Kitten 48x48" />
        </div>
      }
      onDismiss={action("Toast dismissed")}
      status={select("Status", _AVAILABLE_STATUSES)}
      showStatusIcon={boolean("Show Status Icon", true)}
    >
      {text(
        "Children",
        "It's probably useful in the long run to default to showing multiple lines of toast. Let's say, three?"
      )}
    </Toast>
  ));
