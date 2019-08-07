# Flyout

A flyout is a lightweight popup container, typically styled as a small box with a nub (pointer). Flyouts provide a container for navigation, actions, and menu options.

Read more about when and how to use the Flyout component [on the website](https://hig.autodesk.com/web/components/flyouts).

## Getting started

### Install the package

```bash
yarn add @hig/flyout @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Flyout, { anchorPoints } from "@hig/flyout";
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

## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

## Using [render props][] for additional customization

[render props]: https://reactjs.org/docs/render-props.html

#### Content

When a function is provided to `props.content`, it will be given a payload containing:

* `hideFlyout {function()}`
    - An action that will hide the flyout when called

```jsx
<Flyout
  content={({ hideFlyout }) => (
    <div>
      <p>Any content can go in here.</p>
      <button type="button" onClick={hideFlyout}>
        Click to hide
      </button>
    </div>
  )}
>
  <Button title="Open flyout" />
</Flyout>
```

#### Panel:

When a function is provided to `props.panel`, it will be given a payload containing:

* `innerRef {function(HTMLElement)}`
    - A required [ref][] that's used to position the flyout
    - **`innerRef` must be set properly for the flyout to render correctly.**
* `hideFlyout {function()}`
    - An action that will hide the flyout when called
* `[content] {JSX}`
    - Rendered JSX via `props.content`
* `[handleScroll] {function(UIEvent)}`
    - The handler provided to `props.handleScroll`
* `[maxHeight] {number}`
    - The value provided to `maxHeight`

[ref]: https://reactjs.org/docs/refs-and-the-dom.html

```jsx
<Flyout
  panel={({ innerRef }) => (
    <Flyout.Panel innerRef={innerRef}>
      <CustomContainer>
        <p>Any content can go in here.</p>
      </CustomContainer>
    </Flyout.Panel>
  )}
>
  <Button title="Open flyout" />
</Flyout>
```

#### Children:

When a function is provided to `props.content`, it will be given a payload containing:

* `handleClick {function(MouseEvent)}`
    - An event handler that will toggle the flyout's visibility

```jsx
<Flyout
  content={<p>Any content can go in here.</p>}
>
  {({ handleClick }) => (
    <CustomWrapper>
      <CustomButton onClick={handleClick} />
    </CustomWrapper>
  )}
</Flyout>
```
