# Human Interface Guidelines

[![Greenkeeper badge](https://badges.greenkeeper.io/Autodesk/hig.svg)](https://greenkeeper.io/)

HIG is Autodesk's unified design system, so we can build better products faster.

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
Theme data is a representation of the HIG visual design language in the form of data. With [`@hig/theme-data`](./packages/theme-data/README.md), we publish the data in ECMAScript module, JSON, and SCSS formats. This data includes 8 themes that can be used on any platform. There are four color schemes including...

* Light gray
* Dark gray
* Dark blue
* Web light (default) - though it is the default color scheme, it is on the road to being deprecated

...with two densities–high and low–for each scheme. See how to [provide a theme to components](./packages/theme-context#provide-a-theme-to-components). 

- [`@hig/theme-data`](./packages/theme-data/README.md) - HIG design spec as data
- [`<ThemeContext>`](./packages/theme-context/README.md) - A component to ease consumption of theme data from within React components.

## React components

### Basics
- Typography - See [`<Typography>`](./packages/typography/README.md) and [`<RichText>`](./packages/rich-text/README.md)
- Layout - See [`<Spacer>`](./packages/spacer/README.md)
- Icons - See [`<Icons>`](./packages/icons/README.md) to easily render icons in React and the [`@hig/icons`](./packages/icons/README.md) package for svg data

### Components

Each HIG pattern is implemented as a set of React components. Each pattern is published to NPM individually under the @hig namespace.

- [`<Avatar>`](./packages/avatar/README.md) - A visual representation of a customer's identity
- [`<Banner>`](./packages/banner/README.md) - An alert that requires a user action
- [`<Button>`](./packages/button/README.md) - Trigger actions or changes
- [`<Checkbox>`](./packages/checkbox/README.md) - A control to select from non-exclusive options
- [`<Dropdown>`](./packages/dropdown/README.md) - A menu to select one or many from a list
- [`<Flyout>`](./packages/flyout/README.md) - A lightweight popup container
- [`<Icons>`](./packages/icons/README.md) - Represents a concept in graphical form
- [`<IconButton>`](./packages/icon-button/README.md) - Action buttons that include an icon only
- [`<Modal>`](./packages/modal/README.md) - An overlay that focuses the customer's attention
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
- [`<Tabs>`](./packages/tabs/README.md) - Keeps related content in a single container
- [`<TextArea>`](./packages/text-area/README.md) - A control to provide a large amount of freeform text
- [`<TextLink>`](./packages/text-link/README.md) - Directs visitors to another location
- [`<Timestamp>`](./packages/timestamp/README.md) - Presents a date with humanized phrasing
- [`<Tooltip>`](./packages/tooltip/README.md) - Provides context in a small popup container
- [`<TopNav>`](./packages/top-nav/README.md) - Navigation across the top of the screen
- [`<Typography>`](./packages/typography/README.md) - A set of components in many typographical variations

## Contributing

Read our contribution guidelines here: [CONTRIBUTING.md](CONTRIBUTING.md)
