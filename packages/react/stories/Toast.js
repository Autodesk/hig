import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs/react";
import Avatar from "elements/components/Avatar";
import Toast, { _AVAILABLE_STATUSES } from "elements/components/Toast";
import intlExamples from "./toast-intl-examples.json";
import languageOptions from "./support/languageOptions";

storiesOf("Toast", module)
  .add("default", () => (
    <Toast
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
  ))

  .add("international", () => {
    const lang =
      intlExamples[select("Language", languageOptions(intlExamples), "german")];
    return (
      <div
        dir={select(
          "Language direction",
          { ltr: "Left to right", rtl: "Right to left" },
          lang.textDirection
        )}
      >
        <Toast
          image={<Avatar name={text("Name", lang.name)} size="large-48" />}
          onDismiss={action("Toast dismissed")}
          status={select("Status", _AVAILABLE_STATUSES)}
        >
          {text("Children", lang.children)}
        </Toast>
      </div>
    );
  });
