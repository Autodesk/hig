# HIG theme data proof-of-concept

HIG theme data is a representation of the HIG visual design language in the form of data.


## Getting started
```bash
yarn add @hig/theme-data-poc
```

#### Access theme data as json
```js
import lightGrayMediumDensityTheme from '@hig/theme-data-poc/build/json/lightGrayMediumDensityTheme/resolvedRoles.json';

console.log(lightGrayMediumDensityTheme);
// {
//  "basics.borderRadii.none": "0",
//  "basics.borderRadii.small":  "0"
//  "basics.borderRadii.medium":  "2px"
// ...
// }
```

#### Extend a theme to make a new variation
```js
import resolvedRoles from '@hig/theme-data-poc/build/json/lightGrayMediumDensityTheme/resolvedRoles.json';
import unresolvedRoles from '@hig/theme-data-poc/build/json/lightGrayMediumDensityTheme/unresolvedRoles.json';
import { extendTheme, resolveTheme } from '@hig/theme-data-poc';

const redAccentedUnresolvedTheme = extendTheme(unresolvedRoles, {
    "colorScheme.accentColor500": "#F00",
});
const redAccentedTheme = resolveTheme(redAccentedUnresolvedTheme);

console.log(redAccentedTheme);
// {
// ...
//  "colorScheme.accentColor500": "#F00",
//  "input.focus.borderBottomColor": "#F00"
// ...
// }
```


## Vision
- Autodesk products evolve toward a greater level of visual coherence
- Product teams can alter visual design of products with minimal developer effort

## Goals
- Enable teams across Autodesk to share UI components
- Shared components are highly visually flexible
- HIG developers are not a bottleneck to collaboration

## Strategy
- Deliver HIG design as data for consumption by any product regardless of tech stack
- Enable product teams to customize theme values in order to meet their needs as they see fit
- Enable product teams to extend the schema to incorporate new or product-specific components

## Important domain concepts

### [Basics](./src/basics)
Named values (colors, spacings, typographic specifications, etc.) from which most (all?) other values in a theme are derived

### Role
A property of a component provided by a theme. E.g. Divider is a component. '1px' is a border width. `DIVIDER.BORDER_WIDTH` is a role mapping a width to the border width property of the divider component.

### Resolved roles
Data defining a primitive value (e.g. “#0696D7” or “16px”) for each role in the theme schema.

### Unresolved roles
Data defining a primitive value or reference for each role in the theme schema.

### Reference
References in a theme configuration may point to a basic value or another role. References may point to roles defined with another reference. For example, `textArea.focus.color` may refer to `input.focus.color`, which refers to `accentColor`, which refers to `basics.colors.autodeskBlue600`.

## Thoughts on modeling a theme
We have chosen to model theme data more simply than the domain.

In terms of domain, at the highest level, values in a theme fall into three categories—basics, system-level, and component-specific. Examples of system-level values are accent colors, default text properties, and colors of background surfaces. Component-level values fit into a hierarchy beginning with category (e.g. form fields), below that falls component (e.g. select element), then sub-component (e.g. option element). Category, component, and subcomponent are arbitrarily deep, and not all components fall within a category. Within a component values vary according to state. Component states are better represented by a node-map than a tree. Finally, for a given state, a value maps to a property (e.g. background color).

```
Theme
- Basics
- System-level values
- Component values
    - Category - optional
        - Component
            - Subcomponent - arbitrarily deep
                - State* - more of a node map than a tree
                    - Property: value
```

In data we model the theme as a flat map of key-value pairs. We represent the hierarchy in the key, but only as much as is needed to disambiguate one key from another. e.g. a role in the theme may have a key such as `textAreaDisabled.textColor`. The key uses component name, state name, and property name but does not describe a category.

## Ideas discussed but not advanced at this time
- Stylesheet factories: Functions that map a theme and state to a stylesheet for a component
- Stylesheets: Data providing a set of styles for each state a component can enter
- Using theme schema to raise errors in development when attempting to access an undefined or mis-typed role
- Validating themes against a json schema
- Considering how a component will declare role dependencies
