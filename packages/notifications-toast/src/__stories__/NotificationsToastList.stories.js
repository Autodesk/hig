import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import Avatar from "@hig/avatar";
import sampleAvatar from "@hig/storybook/storybook-support/fixtures/avatar/chris-reynolds.png";

import NotificationsToast, { NotificationsToastList } from "../index";
import { AVAILABLE_PLACEMENTS } from "../NotificationsToastList";

import NotificationsToastListInteractions from "./NotificationsToastListInteractions";

const exampleToasts = React.Children.toArray([
  <NotificationsToast status="primary">
    <strong>Object Name</strong> was the first Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast status="warning">
    <strong>Object Name</strong> was the second Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast
    image={<Avatar name="Arya Stark" size="large-48" image={sampleAvatar} />}
    status="error"
  >
    <strong>Object Name</strong> was the third Toast notification to appear.
  </NotificationsToast>,
  <NotificationsToast>
    <strong>Object Name</strong> is last.
  </NotificationsToast>
]);

storiesOf("NotificationsToastList", module)
  .add(
    "static",
    withInfo()(() => (
      <NotificationsToastList
        placement={select("Placement", AVAILABLE_PLACEMENTS, "top")}
      >
        {exampleToasts}
      </NotificationsToastList>
    ))
  )
  .add(
    "demonstrate adding new children",
    withInfo()(() => (
      <NotificationsToastListInteractions
        placement={select("Placement", AVAILABLE_PLACEMENTS, "top")}
      />
    ))
  );
