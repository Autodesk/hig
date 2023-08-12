# Profile Flyout

The profile flyout is a component to use with the top navigation. When clicking the avatar, this flyout opens, containing the customer's name, email, and links to their account info.

## Getting started

### Install the package

```bash
yarn add @hig/profile-flyout @weave-design/theme-context @weave-design/theme-data
```

### Import the component

```js
import ProfileFlyout from '@hig/profile-flyout';
```

## Basic usage

```jsx
<ProfileFlyout
  image="https://placekitten.com/g/50/50"
  name="David Gonzalez"
  email="gonzalezd@autodesk.com"
/>
```
