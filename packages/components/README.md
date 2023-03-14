# Components

The Components package exports all of the available Weave components for easy access.

Please view the individual components packages for component specific documentation.

## Getting started

### Install the package

```bash
yarn add @weave-design/components
```

## Basic usage

### Import all components

```jsx
import * as WeaveDesign from "@weave-design/components";

<HIG.Button title="Click Me" />;
```

### Import a single component

```jsx
import { Button } from "@weave-design/components";

<Button title="Click Me" />;
```

### Import a component with component-specific exports

```jsx
import Button, { types } from "@weave-design/components/build/button";

<Button type={types.PRIMARY} title="Click Me" />;
```
