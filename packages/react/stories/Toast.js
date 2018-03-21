import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import Avatar from "elements/components/Avatar";
import Toast from "elements/components/Toast";
import { _AVAILABLE_STATUSES } from "elements/components/Toast/ToastPresenter";

storiesOf("Toast", module)
  .add("default", () => (
    <Toast
      in={boolean("Visible (animate in/out)", true)}
      onDismiss={action("Toast dismissed")}
      status={select("Status", _AVAILABLE_STATUSES)}
    >
      {text(
        "Children",
        "It's probably useful in the long run to default to showing multiple lines of toast. Let's say, three?"
      )}
    </Toast>
  ))

  .add("with an avatar", () => (
    <Toast
      in={boolean("Visible (animate in/out)", true)}
      image={<Avatar name="Jon Snow" size="large-48" />}
      onDismiss={action("Toast dismissed")}
      status={select("Status", _AVAILABLE_STATUSES)}
    >
      {text(
        "Children",
        "It's probably useful in the long run to default to showing multiple lines of toast. Let's say, three?"
      )}
    </Toast>
  ))

  .add("with a thumbnail", () => (
    <Toast
      in={boolean("Visible (animate in/out)", true)}
      image={
        <div style={{ width: "48px", height: "48px" }}>
          <img src="http://placekitten.com/g/48/48" />
        </div>
      }
      onDismiss={action("Toast dismissed")}
      status={select("Status", _AVAILABLE_STATUSES)}
    >
      {text(
        "Children",
        "It's probably useful in the long run to default to showing multiple lines of toast. Let's say, three?"
      )}
    </Toast>
  ));
