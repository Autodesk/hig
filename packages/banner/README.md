# Banner

Banners are notifications alerting an event that requires a user action. They are similar toasts except banners are not sparked by the user’s action, therefore they require a different design.  Banners are primarily used for global messages about the system that can be simply informational (blue) or color coded to signal success (green), warning (yellow) and error (red).

Read more about when and how to use the Banner component [on the internal wiki](https://wiki.autodesk.com/display/HIG/Banners).

## Getting started

```
yarn add @hig/banner
```

## Import the component and CSS

```
import Banner from '@hig/banner';
```

## Basic usage

```jsx
<Banner type="primary">
  Make sure you know these changes will effect your project status
</Banner>
```

## With actions

```jsx
<Banner
  type="primary"
  actions={({ isWrappingActions }) => (
    <Banner.Interactions isWrappingActions={isWrappingActions}>
      <Banner.Action>
        <Button
          type="secondary"
          size="small"
          width={isWrappingActions ? "grow" : "shrink"}
          title={text(
            "Resolve text",
            t(languages, chosenLanguage, "BANNER_RESOLVE_BUTTON_TEXT")
          )}
        />
      </Banner.Action>
      <Banner.Action>
        <Button
          type="secondary"
          size="small"
          width={isWrappingActions ? "grow" : "shrink"}
          title={text(
            "Reject text",
            t(languages, chosenLanguage, "BANNER_REJECT_BUTTON_TEXT")
          )}
        />
      </Banner.Action>
    </Banner.Interactions>
  )}
>
  Make sure you know these changes will effect your project status
</Banner>
```
