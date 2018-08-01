# Flyout

A flyout is a lightweight popup container, typically styled as a small box with a nub (pointer). Flyouts provide a container for navigation, actions, and menu options.

Read more about when and how to use the Flyout component [on the website](https://hig.autodesk.com/web/components/flyouts).

## Getting started

### Install the package

```bash
yarn add @hig/flyout
```

### Import the component and CSS

```js
import Flyout, { anchorPoints } from "@hig/flyout";
import "@hig/flyout/build/index.css";
```

## Basic usage

```jsx
<Flyout
  anchorPoint={anchorPoints.RIGHT_TOP}
  content={<p>Any content can go in here.</p>}
>
  <Button title="Open flyout" />
</Flyout>
```

### Using render props for additional customization

```jsx
<Flyout
  content={({ hideFlyout }) => (
    <div>
      <button type="button" onClick={hideFlyout}>
        Click to close
      </button>
    </div>
  )}
  panel={({ content, handleScroll, hideFlyout, innerRef, maxHeight }) => (
    <Flyout.Panel innerRef={innerRef} maxHeight={maxHeight}>
      <CustomContainer onScroll={handleScroll}>{content}</CustomContainer>
    </Flyout.Panel>
  )}
>
  {({ handleClick }) => (
    <CustomWrapper>
      <CustomButton onClick={handleClick} />
    </CustomWrapper>
  )}
</Flyout>
```
