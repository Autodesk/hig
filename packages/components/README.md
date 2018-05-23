# Components

The Components package exports all of the available HIG components for easy access.

Please view the individual components packages for component specific documentation.

## Getting started

### Install the package

```bash
yarn add @hig/components
```

## Basic usage

### Import all components and CSS

```jsx
import * as HIG from "@hig/components";
import "@hig/components/build/index.css";

<HIG.Button title="Click Me" />;
```

### Import a single component

```jsx
import { Button } from "@hig/components";
import "@hig/components/build/button.css";

<Button title="Click Me" />;
```

### Import a component with component-specific exports

```jsx
import Button, { types } from "@hig/components/build/button";
import "@hig/components/build/button.css";

<Button type={types.PRIMARY} title="Click Me" />;
```
