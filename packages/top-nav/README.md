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
