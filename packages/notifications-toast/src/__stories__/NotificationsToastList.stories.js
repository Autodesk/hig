import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Avatar from "@hig/avatar";
import sampleAvatar from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";

import NotificationsToast, { NotificationsToastList } from "../index";
import { AVAILABLE_PLACEMENTS } from "../NotificationsToastList";

import NotificationsToastListInteractions from "./NotificationsToastListInteractions";
import infoOptions from "./infoOptions";

const exampleToasts = React.Children.toArray([
  <NotificationsToast status="primary">
    <strong>Object Name</strong> was the first Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast status="warning">
    <strong>Object Name</strong> was the second Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast
    image={<Avatar name="Arya Stark" size="large" image={sampleAvatar} />}
    status="error"
  >
    <strong>Object Name</strong> was the third Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast>
    <strong>Object Name</strong> is last.
  </NotificationsToast>
]);

storiesOf("Notifications|ToastList", module)
  .add(
    "static",
    withInfo({
      ...infoOptions,
      propTablesExclude: [NotificationsToastListInteractions]
    })(() => (
      <KnobbedThemeProvider>
        <NotificationsToastList
          placement={select("Placement", AVAILABLE_PLACEMENTS, "top")}
        >
          {exampleToasts}
        </NotificationsToastList>
      </KnobbedThemeProvider>
    ))
  )
  .add(
    "demonstrate adding new children",
    withInfo({
      ...infoOptions,
      propTablesExclude: [NotificationsToastListInteractions]
    })(() => (
      <KnobbedThemeProvider>
        <NotificationsToastListInteractions
          placement={select("Placement", AVAILABLE_PLACEMENTS, "top")}
        />
      </KnobbedThemeProvider>
    ))
  );
