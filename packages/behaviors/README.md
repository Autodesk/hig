# Behaviors

> Shared component behaviors used across component

## Getting started

```bash
yarn add @weave-design/behaviors
```

## Import the component and CSS

```js
import { HoverBehavior } from "@weave-design/behaviors";
```

## Basic usage

```jsx
<HoverBehavior>
  {({ hasHover, onMouseEnter, onMouseLeave }) => (
    <span
      style={{ color: hasHover ? "red" : "white" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Hello World
    </span>
  )}
</HoverBehavior>
```
