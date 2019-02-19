import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { Notification } from "@hig/notifications-flyout";

import TopNav, {
  HelpAction,
  Interactions,
  Logo,
  LogoText,
  NotificationsAction,
  ProfileAction,
  ProfileContent
} from "../index";
import AccountLogo from "./accounts-logo.svg";
import infoOptions from "./infoOptions";

const storybook = storiesOf("GlobalNav|TopNav", module);

storybook.add(
  "accounts",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <TopNav
        logo={
          <Logo
            label="Autodesk Accounts"
            title="Autodesk Accounts"
            link="https://autodesk.com"
          >
            <AccountLogo
              style={{ width: "auto", height: "24px", margin: "0" }}
            />
          </Logo>
        }
        rightActions={
          <Interactions>
            <NotificationsAction>
              <Notification id="1">
                <div>
                  <strong>First Notification</strong>
                  <p>You can put what ever you want in here.</p>
                </div>
              </Notification>
            </NotificationsAction>
            <HelpAction>
              <div>
                <h3>Help</h3>
                <p>You can put what ever you want in here.</p>
              </div>
            </HelpAction>
            <ProfileAction avatarName="Peter Parker">
              <ProfileContent
                profileName="Peter Parker"
                profileEmail="peter@example.com"
              >
                <p>You can put what ever you want in here.</p>
              </ProfileContent>
            </ProfileAction>
          </Interactions>
        }
      />
    </KnobbedThemeProvider>
  ))
);

storybook.add(
  "with text logo",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <TopNav logo={<Logo link="https://autodesk.com">Autodesk HIG</Logo>} />
    </KnobbedThemeProvider>
  ))
);

storybook.add(
  "using LogoText",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <TopNav
        logo={
          <Logo link="https://autodesk.com" label="Autodesk HIG">
            <LogoText>
              AUTODESK <strong>HIG</strong>
            </LogoText>
          </Logo>
        }
      />
    </KnobbedThemeProvider>
  ))
);
