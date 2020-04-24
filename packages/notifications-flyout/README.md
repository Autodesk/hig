# Notifications Flyout

The notifications flyout provides information and warnings that products may recover from without user involvement. It is meant to be included in the navigation bar on the top of the page.

Read more about when and how to use the Notifications Flyout [on the internal wiki](https://wiki.autodesk.com/display/HIG/Notifications+Flyout).

## Getting started

```bash
yarn add @hig/notifications-flyout @hig/theme-context @hig/theme-data
```

## Import the component

```js
import NotificationsFlyout, { Notification } from "@hig/notifications-flyout";
```

## Basic usage

```jsx
<NotificationsFlyout>
  <Notification>
    <p>Your subscription expires May 5</p>
  </Notification>
</NotificationsFlyout>
```

## Advanced usage

```jsx
import NotificationsFlyout, { anchorPoints } from "@hig/notifications-flyout";
import Timestamp from "@hig/timestamp";

<NotificationsFlyout
  open
  heading="Alerts"
  indicatorTitle="View application alerts"
  anchorPoint={anchorPoints.TOP_CENTER}
  notifications={[
    {
      id: "unique-id",
      featured: true,
      unread: true,
      timestamp: <Timestamp timestamp="2018-08-20T20:24:50.333Z" />,
      content: <p>Something happened</p>
    },
    {
      content: "Hello world"
    }
  ]}
/>
```
