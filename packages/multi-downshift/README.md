# Multi-Downshift

> Multi-selection support for [Downshift][]

[Downshift]: https://github.com/paypal/downshift


## Getting started

```bash
yarn add @hig/multi-downshift
```

## Import the component

```js
import MultiDownshift from '@hig/multi-downshift';
```

## Basic usage

```jsx
<MultiDownshift
  onChange={handleChange}
  itemToString={itemToString}
>
{({
    getButtonProps,
    getRemoveButtonProps,
    isOpen,
    selectedItems,
    getItemProps,
    highlightedIndex,
  }) => (
    <MyComponent />
  )
}
</MultiDownshift>
```

## Credits

Based on [the work](https://codesandbox.io/s/W6gyJ30kn) by [Kent C. Dodds](https://kentcdodds.com/).
