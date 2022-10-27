# Weave

[![Greenkeeper badge](https://badges.greenkeeper.io/Autodesk/hig.svg)](https://greenkeeper.io/)

Weave is Autodesk's unified design system, so we can build better products faster.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting started](#getting-started)
- [Theme data and theming components](#theme-data-and-theming-components)
- [React components](#react-components)
  - [Basics](#basics)
  - [Components](#components)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

Add a component to your app:
```jsx
yarn add @hig/button
```

Import and render the component:
```jsx
import Button from '@hig/button';

function MyComponent() {
  return <Button title="Hello, world!" />
}
```

## Theme data and theming components
Theme data is a representation of the Weave visual design language in the form of data. With [`@hig/theme-data`](./packages/theme-data/README.md), we publish the data in ECMAScript module, JSON, and SCSS formats. This data includes 8 themes that can be used on any platform. There are four color schemes including...

* Light gray
* Dark gray
* Dark blue

...with two densities–high and low–for each scheme. See how to [provide a theme to components](./packages/theme-context#provide-a-theme-to-components). 

- [`@hig/theme-data`](./packages/theme-data/README.md) - Weave design spec as data
- [`<ThemeContext>`](./packages/theme-context/README.md) - A component to ease consumption of theme data from within React components.

## React components

### Basics
- Typography - See [`<Typography>`](./packages/typography/README.md) and [`<RichText>`](./packages/rich-text/README.md)
- Layout - See [`<Spacer>`](./packages/spacer/README.md)
- Icons - See [`<Icons>`](./packages/icons/README.md) to easily render icons in React and the [`@hig/icons`](./packages/icons/README.md) package for svg data

### Components

Each Weave pattern is implemented as a set of React components. Each pattern is published to NPM individually under the @hig namespace.

- [`<Accordion>`](./packages/accordion/README.md) - Make content-heavy pages appear less so by vertically stacking items in lists that users can expand or contract
- [`<Avatar>`](./packages/avatar/README.md) - A visual representation of a customer's identity
- [`<AvatarBundle>`](./packages/avatar-bundle/README.md) - Indicate a group of people who are associated with a task or information.
- [`<Badge>`](./packages/badge/README.md) - Visual indicators that communicate status and draw attention to an object.
- [`<Banner>`](./packages/banner/README.md) - An alert that requires a user action
- [`<Button>`](./packages/button/README.md) - Trigger actions or changes
- [`<Checkbox>`](./packages/checkbox/README.md) - A control to select from non-exclusive options
- [`<Dropdown>`](./packages/dropdown/README.md) - A menu to select one or many from a list
- [`<Flyout>`](./packages/flyout/README.md) - A lightweight popup container
- [`<Icons>`](./packages/icons/README.md) - Represents a concept in graphical form
- [`<IconButton>`](./packages/icon-button/README.md) - Action buttons that include an icon only
- [`<Label>`](./packages/label/README.md) - A caption for an item in a user interface
- [`<Menu>`](./packages/menu/README.md) - Display a list of choices through interaction with a button, icon or other controls
- [`<Modal>`](./packages/modal/README.md) - An overlay that focuses the customer's attention
- [`<NotificationsFlyout>`](./packages/notifications-flyout/README.md) - A less intrusive way of announcing an event of potential interest to the user
- [`<NotificationsToast>`](./packages/notifications-toast/README.md) - Floating message boxes that appear
- [`<NumericInput>`](./packages/numeric-input/README.md) - For numerical values that allows freehand text entries or toggling values up and down
- [`<ProfileFlyout>`](./packages/profile-flyout/README.md) - A flyout containing customer's name, email, and account info
- [`<ProgressBar>`](./packages/progress-bar/README.md) - An indication of content loading, presented horizontally
- [`<ProgressRing>`](./packages/progress-ring/README.md) - An indication of content loading, presented circularly
- [`<ProjectAccountSwitcher>`](./packages/project-account-switcher/README.md) - Switches the context to different projects or accounts
- [`<RadioButton>`](./packages/radio-button/README.md) - A control to select one exclusively from a list
- [`<RichText>`](./packages/rich-text/README.md) - Applies the HIG typography styles to whatever is passed to it
- [`<SideNav>`](./packages/side-nav/README.md) - Provides high-level navigation
- [`<SkeletonItem>`](./packages/skeleton-item/README.md) - A placeholder for loading content
- [`<Slider>`](./packages/slider/README.md) - A control for selecting a single numeric value from a range
- [`<Spacer>`](./packages/spacer/README.md) - A square of empty space, meant to add space between other components
- [`<Surface>`](./packages/surface/README.md) - A themable container with the appropriate background color for the current theme
- [`<Table>`](./packages/table/README.md) - A collection of data in rows and columns
- [`<Tabs>`](./packages/tabs/README.md) - Keeps related content in a single container
- [`<TextArea>`](./packages/text-area/README.md) - A control to provide a large amount of freeform text
- [`<TextLink>`](./packages/text-link/README.md) - Directs visitors to another location
- [`<Thumbnail>`](./packages/thumbnail/README.md) - Visual anchors and identifiers for objects
- [`<Tile>`](./packages/tile/README.md) - A themable container that display information related to a single subject or destination
- [`<Timestamp>`](./packages/timestamp/README.md) - Presents a date with humanized phrasing
- [`<Toggle>`](./packages/toggle/README.md) - A control for a single action with a clear on/off or start/stop.
- [`<Tooltip>`](./packages/tooltip/README.md) - Provides context in a small popup container
- [`<TopNav>`](./packages/top-nav/README.md) - Navigation across the top of the screen
- [`<TreeView>`](./packages/tree-view/README.md) - A way to view and manipulate a list of data
- [`<Typography>`](./packages/typography/README.md) - A set of components in many typographical variations

## Contributing

Read our contribution guidelines here: [CONTRIBUTING.md](CONTRIBUTING.md)
