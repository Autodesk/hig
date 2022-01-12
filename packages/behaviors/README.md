# Behaviors

> Shared component behaviors used across component


## Getting started

```bash
yarn add @hig/behaviors
```

## Import the component and CSS

```js
import { HoverBehavior } from "@hig/behaviors";
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
