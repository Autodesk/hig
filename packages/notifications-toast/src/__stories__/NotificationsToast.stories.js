import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Avatar from "@hig/avatar";

import languageOptions from "@hig/storybook/storybook-support/languageOptions";
import avatar from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";
import greenhouseThumbnail from "@hig/storybook/storybook-support/fixtures/thumbnail/greenhouse.png";

import NotificationsToast from "../index";
import { AVAILABLE_STATUSES } from "../statuses";

import intlExamples from "./notifications-toast-intl-examples.json";
import infoOptions from "./infoOptions";

storiesOf("Notifications|Toast", module)
  .add(
    "default",
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider]
    })(() => (
      <KnobbedThemeProvider>
        <NotificationsToast
          onDismiss={action("Toast dismissed")}
          status={select("Status", AVAILABLE_STATUSES, "primary")}
          showStatusIcon={boolean("Show Status Icon", true)}
        >
          <strong>Object Name</strong>{" "}
          {text("Children", "has new info about it.")}
        </NotificationsToast>
      </KnobbedThemeProvider>
    ))
  )

  .add(
    "with an avatar",
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider]
    })(() => (
      <KnobbedThemeProvider>
        <NotificationsToast
          image={
            <Avatar
              name="Jon Snow"
              size="large"
              image={text("Avatar URL", avatar)}
            />
          }
          onDismiss={action("Toast dismissed")}
          status={select("Status", AVAILABLE_STATUSES)}
        >
          <strong>Person&#39;s Name</strong>{" "}
          {text("Children", "made a change relevant to your project.")}
        </NotificationsToast>
      </KnobbedThemeProvider>
    ))
  )

  .add(
    "with a thumbnail",
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider]
    })(() => (
      <KnobbedThemeProvider>
        <NotificationsToast
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
          status={select("Status", AVAILABLE_STATUSES)}
        >
          <strong>Person&#39;s Name</strong>{" "}
          {text("Children", "invited you to participate on ")}
          <strong>Project Name</strong>
        </NotificationsToast>
      </KnobbedThemeProvider>
    ))
  )

  .add(
    "international",
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider]
    })(() => {
      const lang =
        intlExamples[
          select("Language", languageOptions(intlExamples), "german")
        ];
      return (
        <KnobbedThemeProvider>
          <div
            dir={select(
              "Language direction",
              { ltr: "Left to right", rtl: "Right to left" },
              lang.textDirection
            )}
          >
            <NotificationsToast
              image={
                <Avatar
                  name={text("Name", lang.name)}
                  size="large"
                  image={text("Avatar URL", avatar)}
                />
              }
              onDismiss={action("Toast dismissed")}
              status={select("Status", AVAILABLE_STATUSES)}
            >
              {text("Children", lang.children)}
            </NotificationsToast>
          </div>
        </KnobbedThemeProvider>
      );
    })
  );
