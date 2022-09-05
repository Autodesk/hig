import React from "react";
import { ArgsTable, Primary, Stories } from "@storybook/addon-docs";
import { Notification } from "@hig/notifications-flyout";
import { css } from "emotion";

import TopNav, {
  HelpAction,
  Interactions,
  Logo,
  LogoText,
  NotificationsAction,
  ProfileAction,
  ProfileContent,
  NavAction,
} from "../index";
import Readme from "../../README.md";
import AccountLogo from "./accounts-logo.svg";

export default {
  title: "Legacy Components/TopNav",
  component: TopNav,
  subcomponents: {
    HelpAction,
    Interactions,
    Logo,
    LogoText,
    NotificationsAction,
    ProfileAction,
    ProfileContent,
    NavAction,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Stories />
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};

const defaultStory = () => (
  <TopNav
    logo={
      <Logo
        label="Autodesk Accounts"
        title="Autodesk Accounts"
        link="https://autodesk.com"
      >
        <AccountLogo
          className={css({ width: "auto", height: "24px", margin: "0" })}
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
);

const Template = (args, context) => {
  switch (context.story) {
    case "With text logo":
      return (
        <TopNav logo={<Logo link="https://autodesk.com">Autodesk HIG</Logo>} />
      );
    case "Using logo text":
      return (
        <TopNav
          logo={
            <Logo link="https://autodesk.com" label="Autodesk HIG">
              <LogoText>
                AUTODESK <strong>HIG</strong>
              </LogoText>
            </Logo>
          }
        />
      );
    case "Custom NavAction":
      return (
        <TopNav
          logo={
            <Logo link="https://autodesk.com" label="Autodesk HIG">
              <LogoText>
                AUTODESK <strong>HIG</strong>
              </LogoText>
            </Logo>
          }
          rightActions={
            <Interactions>
              <NavAction title="Custom Nav Action">
                <div>
                  <h3>Navigation Action</h3>
                  <p>
                    You can put what ever you want in here. You can also change
                    the icon and the title of the button.
                  </p>
                </div>
              </NavAction>
            </Interactions>
          }
        />
      );
    default:
      return defaultStory();
  }
};

export const Default = Template.bind({});

export const WithTextLogo = Template.bind({});

WithTextLogo.storyName = "With text logo";

export const UsingLogoText = Template.bind({});

UsingLogoText.storyName = "Using logo text";

export const CustomNavAction = Template.bind({});

CustomNavAction.storyName = "Custom NavAction";
