# Timestamp

The timestamp component presents a date in the past with humanized phrasing in English: "10 minutes/hours/days/months ago".

## Getting started

```
yarn add @weave-design/timestamp @weave-design/theme-context @weave-design/theme-data
```

## Import the component

```
import Timestamp from '@weave-design/timestamp';
```

## Basic usage

```jsx
<Timestamp timestamp="2018-05-05T12:00:00.000Z" />
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Timestamp also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Timestamp from '@weave-design/timestamp';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    timestamp: {
      ...styles.timestamp,
      color: themeData["colorScheme.errorColor"]
    }
  });

  return (
    <Timestamp stylesheet={customStylesheet} timestamp="2018-05-05T12:00:00.000Z" />
  );
}
```
