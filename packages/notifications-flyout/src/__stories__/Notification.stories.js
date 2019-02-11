import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { controlledBool, makeSelectOptions } from "@hig/storybook/utils";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import TextLink from "@hig/text-link";
import Timestamp from "@hig/timestamp";

import { createNotificationInfoOptions } from "./infoOptions";
import { types } from "../types";
import Notification from "../Notification";

const infoOptions = createNotificationInfoOptions();
const typeOptions = makeSelectOptions(types);

const groups = {
  actions: "Actions",
  basic: "Basic"
};

const labels = {
  featured: "Featured",
  onDismiss: "Notification dismissed",
  showDismissButton: "Show dismiss button",
  type: "Variant",
  unread: "Unread"
};

const defaults = {
  featured: false,
  showDismissButton: undefined,
  type: types.PRIMARY,
  unread: true
};

storiesOf("Notifications|Flyout/Notification", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider, TextLink]
  })(() => (
    <KnobbedThemeProvider>
      <Notification
        id="1"
        timestamp={<Timestamp timestamp={new Date().toISOString()} />}
        featured={boolean(labels.featured, defaults.featured, groups.basic)}
        onDismiss={action(labels.onDismiss)}
        showDismissButton={controlledBool(
          labels.showDismissButton,
          defaults.showDismissButton,
          groups.actions
        )}
        type={select(labels.type, typeOptions, defaults.type, groups.basic)}
        unread={boolean(labels.unread, defaults.unread, groups.basic)}
      >
        <div>
          <p>
            <b>Your subscription expires May 5</b>
          </p>
          <p>
            Maya
            <br />
            Media & Entertainment Collection
            <br />
            Product Design Collection
            <br />2 more
          </p>
          <p>
            <TextLink link="https://github.com/Autodesk/hig">
              Manage renewal
            </TextLink>
          </p>
        </div>
      </Notification>
    </KnobbedThemeProvider>
  ))
);
