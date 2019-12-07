# TopNav <sup><sub>(Top Navigation)</sub></sup>

The primary navigation across the top of the screen. This piece contains the product name/icon, search bar, project/account switcher, and avatar.

Read more about when and how to use the TopNav component [on the internal wiki](https://wiki.autodesk.com/x/8cvzEw).

## Getting started

### Installation

Install with [Yarn](https://yarnpkg.com/)

```bash
yarn add @hig/top-nav @hig/theme-context @hig/theme-data
```

Or with [npm](https://www.npmjs.com/)

```bash
npm install @hig/top-nav
```

### Import

Import the component:

```bash
import TopNav from '@hig/top-nav';
```

Import the related CSS:

```
import '@hig/top-nav/build/index.css';
```

## Basic usage

```jsx
<TopNav logo={<Logo />} />
```

You can set right interactions as follows using the predefined actions ProfileAction, HelpAction and NotificationsAction:
```jsx
<TopNav
  logo={<Logo />}
  rightActions={
    <Interactions>
      <NotificationsAction />
      <HelpAction />
      <ProfileAction />
    </Interactions>
  }
/>
```

You can create a custom action by using the NavAction component and adding it to a right interaction, be sure to set the title and icon (the default is the list icon):
```jsx
<TopNav
  logo={<Logo />}
  rightActions={
    <Interactions>
      <NavAction title="Custom Nav Action" icon={<Icon/>}>
        <div>Your Content here</div>
      </NavAction>
    </Interactions>
  }
/>
```
