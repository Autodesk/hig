import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import NotificationsFlyout, { Notification } from "@hig/notifications-flyout";
import "@hig/notifications-flyout/build/index.css";

import TopNav from "../index";
import AccountLogo from "./accounts-logo.svg";
import infoOptions from "./infoOptions";

const storybook = storiesOf("GlobalNav|TopNav", module);

storybook.add(
  "accounts",
  withInfo(infoOptions)(() => (
    <TopNav
      logo={
        <TopNav.Logo
          label="Autodesk Accounts"
          title="Autodesk Accounts"
          link="https://autodesk.com"
        >
          <AccountLogo style={{ width: "auto", height: "24px", margin: "0" }} />
        </TopNav.Logo>
      }
      rightActions={
        <TopNav.Interactions>
          <NotificationsFlyout>
            <Notification id="1">
              <div>
                <strong>First Notification</strong>
                <p>You can put what ever you want in here.</p>
              </div>
            </Notification>
          </NotificationsFlyout>
          <TopNav.HelpAction>
            <div>
              <h3>Help</h3>
              <p>You can put what ever you want in here.</p>
            </div>
          </TopNav.HelpAction>
          <TopNav.ProfileAction avatarName="Peter Parker">
            <TopNav.ProfileContent
              profileName="Peter Parker"
              profileEmail="peter@example.com"
            >
              <p>You can put what ever you want in here.</p>
            </TopNav.ProfileContent>
          </TopNav.ProfileAction>
        </TopNav.Interactions>
      }
    />
  ))
);

storybook.add(
  "with text logo",
  withInfo(infoOptions)(() => (
    <TopNav
      logo={<TopNav.Logo link="https://autodesk.com">Autodesk HIG</TopNav.Logo>}
    />
  ))
);

storybook.add(
  "using TopNav.LogoText",
  withInfo(infoOptions)(() => (
    <TopNav
      logo={
        <TopNav.Logo link="https://autodesk.com" label="Autodesk HIG">
          <TopNav.LogoText>
            AUTODESK <strong>HIG</strong>
          </TopNav.LogoText>
        </TopNav.Logo>
      }
    />
  ))
);
