import React from "react";
import { storiesOf } from "@storybook/react";

import HigNotifications from "hig-react/lib/elements/components/GlobalNav/TopNav/Notifications";
import Notification from "hig-react/lib/elements/components/GlobalNav/TopNav/Notification";

import TopNav from "../index";

import accountLogo from "./accounts-logo.svg";

const storybook = storiesOf("TopNav", module);

storybook.add("accounts", () => (
  <TopNav
    logo={
      <TopNav.Logo
        label="Autodesk Accounts"
        title="Autodesk Accounts"
        link="https://autodesk.com"
      >
        <figure
          style={{ width: "auto", height: "24px", margin: "0" }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: accountLogo }}
        />
      </TopNav.Logo>
    }
    rightActions={
      <TopNav.Interactions>
        <HigNotifications>
          <Notification key="1" id="1">
            <div>
              <strong>First Notification</strong>
              <p>You can put what ever you want in here.</p>
            </div>
          </Notification>
        </HigNotifications>
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
));
