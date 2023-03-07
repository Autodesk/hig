# Notifications Flyout

The notifications flyout provides information and warnings that products may recover from without user involvement. It is meant to be included in the navigation bar on the top of the page.

## Getting started

```bash
yarn add @weave-design/notifications-flyout @weave-design/theme-context @weave-design/theme-data
```

## Import the component

```js
import NotificationsFlyout, { Notification } from "@weave-design/notifications-flyout";
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
import NotificationsFlyout, { anchorPoints } from "@weave-design/notifications-flyout";
import Timestamp from "@weave-design/timestamp";

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
