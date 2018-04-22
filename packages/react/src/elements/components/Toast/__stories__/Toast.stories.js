import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import Avatar from "@hig/avatar";

import languageOptions from "@hig/storybook/storybook-support/languageOptions";
import avatar from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import greenhouseThumbnail from "@hig/storybook/storybook-support/fixtures/thumbnail/greenhouse.png";

import Toast, { _AVAILABLE_STATUSES } from "../index";

import intlExamples from "./toast-intl-examples.json";

storiesOf("Toast", module)
  .add(
    "default",
    withInfo()(() => (
      <Toast
        onDismiss={action("Toast dismissed")}
        status={select("Status", _AVAILABLE_STATUSES)}
        showStatusIcon={boolean("Show Status Icon", true)}
      >
        <strong>Object Name</strong>{" "}
        {text("Children", "has new info about it.")}
      </Toast>
    ))
  )

  .add(
    "with an avatar",
    withInfo()(() => (
      <Toast
        image={
          <Avatar
            name="Jon Snow"
            size="large-48"
            image={text("Avatar URL", avatar)}
          />
        }
        onDismiss={action("Toast dismissed")}
        status={select("Status", _AVAILABLE_STATUSES)}
        showStatusIcon={boolean("Show Status Icon", true)}
      >
        <strong>Person&#39;s Name</strong>{" "}
        {text("Children", "made a change relevant to your project.")}
      </Toast>
    ))
  )

  .add(
    "with a thumbnail",
    withInfo()(() => (
      <Toast
        image={
          <div style={{ width: "48px", height: "48px" }}>
            <img
              src={greenhouseThumbnail}
              style={{ borderRadius: "4px" }} // To be replaced eventually by a Thumbnail component
              alt="greenhouse"
            />
          </div>
        }
        onDismiss={action("Toast dismissed")}
        status={select("Status", _AVAILABLE_STATUSES)}
        showStatusIcon={boolean("Show Status Icon", true)}
      >
        <strong>Person&#39;s Name</strong>{" "}
        {text("Children", "invited you to participate on ")}
        <strong>Project Name</strong>
      </Toast>
    ))
  )

  .add(
    "international",
    withInfo()(() => {
      const lang =
        intlExamples[
          select("Language", languageOptions(intlExamples), "german")
        ];
      return (
        <div
          dir={select(
            "Language direction",
            { ltr: "Left to right", rtl: "Right to left" },
            lang.textDirection
          )}
        >
          <Toast
            image={
              <Avatar
                name={text("Name", lang.name)}
                size="large-48"
                image={text("Avatar URL", avatar)}
              />
            }
            onDismiss={action("Toast dismissed")}
            status={select("Status", _AVAILABLE_STATUSES)}
          >
            {text("Children", lang.children)}
          </Toast>
        </div>
      );
    })
  );
