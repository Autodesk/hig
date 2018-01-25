/* eslint-disable no-console */
import React from "react";
import "hig-vanilla/lib/hig.css";

import {
  Button,
  Dropdown,
  GlobalNav,
  breakpoints,
  TextLink,
  Checkbox,
  Notification,
  TextField
} from "../hig-react";

import "./index.css";

import logo from "./images/bim-logo.png";
import { projects, accounts } from "./fixtures/topNavFixtures";
import { modules, submodules, links } from "./fixtures/sideNavFixtures";
import PlaygroundSection from "./PlaygroundSection";

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
import NotificationsSection from "./sections/NotificationsSection";
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

const autocompleteSuggestionOptions = [
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
    id: 0,
    unread: true,
    children: (
      <div>
        <p>
          <b>Your subscription expires May 5</b>
        </p>
        <p>
          Maya<br />
          Media & Entertainment Collection<br />
          Product Design Collection<br />
          2 more
        </p>
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={() => {
              console.log("notifications id 1");
            }}
          />
        </p>
      </div>
    )
  },
  {
    id: 1,
    unread: true,
    children: (
      <div>
        <p>
          <b>Your subscription expires April 20</b>
        </p>
        <p>
          AutoCAD<br />
          Architecture Construction Engineering Collection<br />
          Product Design Collection<br />
        </p>
        <p>
          <TextLink
            href="https://github.com/Autodesk/hig"
            text="Manage renewal"
            onClick={() => {
              console.log("notifications id 2");
            }}
          />
        </p>
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
      topNavSearchQueryValue: "",
      topNavSearchQueryType: undefined,
      seenNotificationIds: [],
      sideNavTheme: "light",
      sideNavLoading: false,
      changeSideNavOnHover: false,
      sideNavVariant: "compact",
      notifications: sampleNotifications,
      readIds: this._initialReadNotifications(sampleNotifications),
      notificationsLoading: false,
      showHamburgerButton: true
    };
  }

  componentDidMount() {
    this.responsivelyUpdateSideNavVariant();
    window.addEventListener("resize", this.responsivelyUpdateSideNavVariant);
  }

  onSearchInput = input => {
    this.setState({
      topNavSearchQueryValue: input.value,
      topNavSearchQueryType: "text"
    });
  };

  onSearchSubmit = selection => {
    this.setState({
      topNavSearchQueryValue: selection.value,
      topNavSearchQueryType: "text"
    });
  };

  onSearchOptionSelect = selection => {
    console.log(selection);
    this.setState({
      topNavSearchQueryValue: selection.label,
      topNavSearchQueryType: "option"
    });
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

  onNotificationLinkClick = notificationId => {
    this.setState({
      readIds: [...new Set([...this.state.readIds, notificationId])]
    });
  };

  onSideNavMouseEnter = () => {
    if (
      this.state.changeSideNavOnHover &&
      window.innerWidth <= breakpoints.tablet
    ) {
      this.setState({ sideNavVariant: "full" });
    }
  };

  onSideNavMouseLeave = () => {
    if (
      this.state.changeSideNavOnHover &&
      window.innerWidth <= breakpoints.tablet
    ) {
      this.setState({ sideNavVariant: "compact" });
    }
  };

  setSideNavTheme = theme => {
    this.setState({ sideNavTheme: theme });
  };

  setSideNavLoadingState = event => {
    this.setState({ sideNavLoading: event.target.checked });
  };

  setSideNavHoverOption = event => {
    this.setState({ changeSideNavOnHover: event.target.checked });
  };

  setShowHamburgerButton = event => {
    this.setState({ showHamburgerButton: event.target.checked });
  };

  responsivelyUpdateSideNavVariant = () => {
    if (window.innerWidth > breakpoints.tablet) {
      this.setState({ sideNavVariant: "full" });
    } else {
      this.setState({ sideNavVariant: "compact" });
    }
  };

  toggleSideNavVariant = () => {
    if (this.state.sideNavVariant === "full") {
      this.setState({ sideNavVariant: "compact" });
    } else {
      this.setState({ sideNavVariant: "full" });
    }
  };

  toggleSideNav = () => {
    this.setState({ isSideNavOpen: !this.state.isSideNavOpen });
  };

  transformedNotifications = notifications =>
    notifications.map(notification =>
      Object.assign({}, notification, {
        onLinkClick: this.onNotificationLinkClick,
        unread: !this.state.readIds.includes(notification.id)
      })
    );

  addNotification = () => {
    const newNotification = {
      id: this.state.notifications.length,
      unread: true,
      onLinkClick: this.onNotificationLinkClick,
      children: (
        <div>
          <p>
            You have 4 new seats of <b>Product Design Collection</b>{" "}
            subscription, switched from <b>Building Design Suite Premium</b>
            subscription.
          </p>
          <p>
            <TextLink text="Learn how to switch" />
            {" or "}
            <TextLink text="Assign users" />
          </p>
        </div>
      )
    };

    this.setState({
      notifications: [...this.state.notifications, newNotification]
    });
  };

  featuredNotification = () => (
    <Notification id={2} onDismiss={this.featuredNotificationDismissed}>
      <div>
        <p>
          <b>New enhancements to subscription management lorum ipsom gas</b>
        </p>
        <p>
          Lorum reduce seats on your subscriptions and upcoming payments in your
          account
        </p>
        <p>
          <TextLink text="Primary link" />
          {" or "}
          <TextLink text="Secondary link" />
        </p>
      </div>
    </Notification>
  );

  featuredNotificationDismissed = () => {
    console.log("Feature notification dismissed");
  };

  navigate = id => {
    console.log("Go to", id);
    this.setState({ activeModuleId: id });
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

  _initialReadNotifications(notifications) {
    return notifications
      .filter(notification => !notification.unread)
      .map(notification => notification.id);
  }

  topNavQueryProps = () => {
    const props = {
      disabled: true,
      label: "TopNav search query"
    };

    if (!this.state.topNavSearchQueryValue) {
      return props;
    }

    const value = `${this.state.topNavSearchQueryType} - ${
      this.state.topNavSearchQueryValue
    }`;
    return {
      ...props,
      value
    };
  };

  topNavSearchOptions = () =>
    this.state.topNavSearchQueryValue &&
    this.state.topNavSearchQueryValue.length > 0
      ? autocompleteSuggestionOptions.filter(option =>
          option.label
            .toLowerCase()
            .startsWith(this.state.topNavSearchQueryValue.toLowerCase())
        )
      : [];

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
      hideHamburgerButton: !this.state.showHamburgerButton,
      onAccountClick: this.accountClicked,
      onProjectClick: this.projectClicked,
      onSearchInput: this.onSearchInput,
      onSearchSubmit: this.onSearchSubmit,
      onSearchOptionSelect: this.onSearchOptionSelect,
      searchOptions: this.topNavSearchOptions(),
      searchValue: this.state.topNavSearchQueryValue,
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
        featuredNotification: this.featuredNotification(),
        loading: this.state.notificationsLoading
      },
      profile: {
        image: "https://placekitten.com/g/50/50",
        name: "David Gonzalez",
        email: "gonzalezd@autodesk.com"
      }
    };

    const sideNavProps = {
      superHeaderLabel: "HIG",
      headerLabel: "Playground",
      headerLink: "http://apple.com",
      copyright: "2018",
      higTheme: this.state.sideNavTheme,
      loading: this.state.sideNavLoading,
      compactUntilHover: this.state.sideNavAutoCompact,
      links,
      onVariantToggleClick: this.toggleSideNavVariant,
      onLogoClick: event => {
        event.preventDefault();
        console.log("Logo clicked");
      },
      onMouseEnter: this.onSideNavMouseEnter,
      onMouseLeave: this.onSideNavMouseLeave,
      showVariantToggleButton: !this.state.changeSideNavOnHover,
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
      onSubmoduleClick: this.handleSubmoduleClick,
      variant: this.state.sideNavVariant
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
        sideNavOpen={this.state.isSideNavOpen}
        onHamburgerClick={this.toggleSideNav}
      >
        <PlaygroundSection title="GlobalNav">
          <Dropdown
            label="SideNav theme"
            options={[
              { label: "Light", id: "light", value: "light" },
              { label: "Dark blue", id: "dark-blue", value: "dark-blue" }
            ]}
            value={this.state.sideNavTheme}
            onChange={this.setSideNavTheme}
          />
          <Checkbox
            label="SideNav loading"
            checked={this.state.sideNavLoading}
            onChange={this.setSideNavLoadingState}
          />
          <Checkbox
            label="Expand/Collapse SideNav on hover on narrow screens"
            checked={this.state.changeSideNavOnHover}
            onChange={this.setSideNavHoverOption}
          />
          <Checkbox
            label="Show hamburger button"
            checked={this.state.showHamburgerButton}
            onChange={this.setShowHamburgerButton}
          />
          <TextField {...this.topNavQueryProps()} />
        </PlaygroundSection>
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
        <NotificationsSection />
        <ShowMoreLessSection />
        <TimestampSection />
      </GlobalNav>
    );
  }
}

export default Playground;
