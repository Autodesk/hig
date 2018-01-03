/* eslint-disable no-console */
import React from "react";
import "hig-vanilla/lib/hig.css";

import { Button, GlobalNav, breakpoints, TextLink } from "../hig-react";

import "./index.css";

import logo from "./images/bim-logo.png";
import { projects, accounts } from "./fixtures/topNavFixtures";
import { modules, submodules, links } from "./fixtures/sideNavFixtures";

import ActionBarSection from "./sections/ActionBarSection";
import AvatarSection from "./sections/AvatarSection";
import ButtonSection from "./sections/ButtonSection";
import CheckboxSection from "./sections/CheckboxSection";
import ContainerViewSection from "./sections/ContainerViewSection";
import DropdownSection from "./sections/DropdownSection";
import ExpandingFilterSectionSection from "./sections/ExpandingFilterSectionSection";
import FlyoutSection from "./sections/FlyoutSection";
import GridSection from "./sections/GridSection";
import IconButtonSection from "./sections/IconButtonSection";
import IconSection from "./sections/IconSection";
import ModalSection from "./sections/ModalSection";
import ImageSection from "./sections/ImageSection";
import PasswordFieldSection from "./sections/PasswordFieldSection";
import ProgressBarSection from "./sections/ProgressBarSection";
import ProgressRingSection from "./sections/ProgressRingSection";
import RadioButtonSection from "./sections/RadioButtonSection";
import RangeSection from "./sections/RangeSection";
import RichTextSection from "./sections/RichTextSection";
import SectionLabelSection from "./sections/SectionLabelSection";
import SelectableTableSection from "./sections/SelectableTableSection";
import ShowMoreLessSection from "./sections/ShowMoreLessSection";
import TableSection from "./sections/TableSection";
import TabsSection from "./sections/TabsSection";
import TextAreaSection from "./sections/TextAreaSection";
import TextFieldSection from "./sections/TextFieldSection";
import TextLinkSection from "./sections/TextLinkSection";
import TimestampSection from "./sections/TimestampSection";
import TooltipSection from "./sections/TooltipSection";
import TypographySection from "./sections/TypographySection";

const defaultSearchOptions = [
  {
    label: "foo",
    value: "foo value"
  },
  {
    label: "foo1",
    value: "foo1 value"
  },
  {
    label: "bar",
    value: "bar value"
  }
];

const sampleNotifications = [
  {
    id: 1,
    unread: true,
    children: () => (
      <a href="https://www.google.com">
        <div>
          <p>This is our first notification</p>
          <div>
            <TextLink
              href="https://github.com/Autodesk/hig"
              text="This is a primary text link"
            />
          </div>
        </div>
      </a>
    )
  },
  {
    id: 2,
    unread: true,
    children: () => (
      <div>
        <p>
          <b>test title</b>
        </p>
        <p>this is regular text</p>
      </div>
    )
  }
];

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModuleId: "1-2-5",
      isHelpOpen: false,
      isSideNavOpen: true,
      searchOptions: [],
      searchValue: "",
      seenNotificationIds: [],
      notifications: sampleNotifications,
      readIds: this._initialReadNotifications(sampleNotifications),
      featuredNotification: this.featuredNotification(),
      notificationsLoading: false
    };
  }

  onSearchInput = input => {
    this.setState({ searchValue: input.value });
    this.filterSearchInput(input.value);
  };

  onSearchSubmit = selection => {
    this.setState({ searchValue: selection.value });
    this.filterSearchInput(selection.value);
  };

  onNotificationsClick = eventInfo => {
    console.log("on notifications click", eventInfo);
  };

  onNotificationsScroll = eventInfo => {
    if (eventInfo.percentageScrolled > 0.5) {
      this.setState({ notificationsLoading: true }, () =>
        setTimeout(() => this.setState({ notificationsLoading: false }), 3000)
      );
    }
  };

  onNotificationClick = notificationId => {
    this.setState({
      readIds: [...new Set([...this.state.readIds, notificationId])]
    });
  };

  toggleSideNav = () => {
    this.setState({ isSideNavOpen: !this.state.isSideNavOpen });
  };

  transformedNotifications = notifications =>
    notifications.map(notification =>
      Object.assign({}, notification, {
        onClick: this.onNotificationClick,
        unread: !this.state.readIds.includes(notification.id)
      })
    );

  addNotification = () => {
    const newNotification = {
      id: 1,
      unread: true,
      onClick: this.onNotificationClick,
      children: () => (
        <div>
          <p>
            <b>test title</b>
          </p>
          <p>this is regular text</p>
        </div>
      )
    };

    this.setState({
      notifications: [...this.state.notifications, newNotification]
    });
  };

  featuredNotification = () => ({
    id: 3,
    children: () => (
      <div>
        <p>
          <b>Featured Notification</b>
        </p>
        <p>this is regular text</p>
      </div>
    ),
    onFeaturedClick: this.featuredNotificationDismissed
  });

  featuredNotificationDismissed = () => {
    console.log("Feature notification dismissed");
  };

  navigate = id => {
    console.log("Go to", id);
    this.setState({ activeModuleId: id });
    if (window.innerWidth <= breakpoints.tablet) {
      this.setState({ isSideNavOpen: false });
    }
  };

  closeHelp = () => {
    this.setState({ isHelpOpen: false });
  };

  openHelp = () => {
    this.setState({ isHelpOpen: true });
  };

  handleSubmoduleClick = id => {
    console.log(`submodule click ${id}`);
  };

  handleModuleClick = id => {
    console.log(`module click ${id}`);
  };

  accountClicked = id => {
    console.log("account clicked", id);
  };

  projectClicked = id => {
    console.log("project clicked", id);
  };

  filterSearchInput = value => {
    const searchOptions =
      value.length > 0
        ? defaultSearchOptions.filter(option =>
            option.label.toLowerCase().startsWith(value.toLowerCase())
          )
        : [];

    this.setState({ searchOptions });
  };

  _initialReadNotifications(notifications) {
    return notifications
      .filter(notification => !notification.unread)
      .map(notification => notification.id);
  }

  render() {
    const helpProps = {
      onClick: this.openHelp,
      onClickOutside: this.closeHelp,
      groups: [
        {
          options: [
            {
              name: "group 1, option 1",
              onClick() {
                console.log("g1 o1 clicked");
              }
            },
            {
              name: "group 1, option 2",
              onClick() {
                console.log("g1 o2 clicked");
              }
            }
          ]
        },
        {
          options: [
            {
              name: "group 2, option 1",
              onClick() {
                console.log("g2 o1 clicked");
              }
            },
            {
              name: "group 2, option 2",
              onClick() {
                console.log("g2 o2 clicked");
              }
            }
          ]
        }
      ],
      open: this.state.isHelpOpen,
      title: "Help!"
    };

    const topNavProps = {
      accounts,
      projects,
      accountTitle: "Accounts",
      projectTitle: "Projects",
      onAccountClick: this.accountClicked,
      onProjectClick: this.projectClicked,
      onSearchInput: this.onSearchInput,
      onSearchSubmit: this.onSearchSubmit,
      searchOptions: this.state.searchOptions,
      searchValue: this.state.searchValue,
      help: helpProps,
      logo,
      onLogoClick() {
        console.log("Logo clicked");
      },
      notifications: {
        title: "Notifications",
        onClick: this.onNotificationsClick,
        onClickOutside: event => {
          console.log("notifications on click outside", event);
        },
        onScroll: this.onNotificationsScroll,
        unreadCount: this.state.unreadCount,
        notifications: this.transformedNotifications(this.state.notifications),
        featuredNotification: this.state.featuredNotification,
        loading: this.state.notificationsLoading
      }
    };

    const sideNavProps = {
      superHeaderLabel: "HIG",
      headerLabel: "Playground",
      headerLink: "http://apple.com",
      links,
      onLogoClick: event => {
        event.preventDefault();
        console.log("Logo clicked");
      },
      searchable: true,
      slot: (
        <div>
          <Button
            title="Designer Toolkit"
            link="https://github.com/Autodesk/hig"
          />
          <p />
          <Button
            title="Git Repository"
            type="secondary"
            link="https://github.com/Autodesk/hig"
            target="_blank"
          />
        </div>
      ),
      onModuleClick: this.handleModuleClick,
      onSubmoduleClick: this.handleSubmoduleClick
    };

    return (
      <GlobalNav
        modules={modules}
        onModuleChange={this.navigate}
        sideNav={sideNavProps}
        submodules={submodules}
        topNav={topNavProps}
        activeModuleId={this.state.activeModuleId}
        showSubNav
        isSideNavOpen={this.state.isSideNavOpen}
        onHamburgerClick={this.toggleSideNav}
      >
        <Button
          size="standard"
          title="Add notification"
          onClick={this.addNotification}
        />
        <ExpandingFilterSectionSection />
        <ActionBarSection />
        <ProgressBarSection />
        <ProgressRingSection />
        <TabsSection />
        <ButtonSection />
        <IconButtonSection />
        <CheckboxSection />
        <PasswordFieldSection />
        <RadioButtonSection />
        <RangeSection />
        <TextFieldSection />
        <TextAreaSection />
        <ModalSection />
        <DropdownSection />
        <TypographySection />
        <TableSection />
        <TextLinkSection />
        <FlyoutSection />
        <TooltipSection />
        <RichTextSection />
        <AvatarSection />
        <GridSection />
        <IconSection />
        <SelectableTableSection />
        <ContainerViewSection />
        <ImageSection />
        <SectionLabelSection />
        <ShowMoreLessSection />
        <TimestampSection />
      </GlobalNav>
    );
  }
}

export default Playground;
