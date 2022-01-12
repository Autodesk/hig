# HIG theme data

HIG theme data is a representation of the HIG visual design language in the form of data.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting started](#getting-started)
  - [Access theme data as ECMAScript module](#access-theme-data-as-ecmascript-module)
  - [Access theme data as JSON](#access-theme-data-as-json)
  - [Access theme data as SCSS variables](#access-theme-data-as-scss-variables)
  - [Access theme data as LESS variables](#access-theme-data-as-less-variables)
- [Available themes](#available-themes)
- [Structure of a theme](#structure-of-a-theme)
  - [Types of roles](#types-of-roles)
    - [Basic roles](#basic-roles)
    - [Dimension roles](#dimension-roles)
      - [Color scheme roles](#color-scheme-roles)
      - [Density roles](#density-roles)
      - [Component roles](#component-roles)
  - [Resolved and unresolved roles](#resolved-and-unresolved-roles)
    - [Unresolved roles](#unresolved-roles)
    - [Resolved roles](#resolved-roles)
- [Extend a theme to make a new variation](#extend-a-theme-to-make-a-new-variation)
- [Vision](#vision)
- [Goals](#goals)
- [Strategy](#strategy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Getting started
```bash
yarn add @hig/theme-data
```

### Access theme data as ECMAScript module
```js
import lightGrayMediumDensityTheme from '@hig/theme-data/build/esm/lightGrayMediumDensityTheme';

console.log(lightGrayMediumDensityTheme);
// {
//  "basics.borderRadii.none": "0",
//  "basics.borderRadii.small":  "0"
//  "basics.borderRadii.medium":  "2px"
// ...
// }
```


### Access theme data as JSON
```js
import lightGrayMediumDensityTheme from '@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json';

console.log(lightGrayMediumDensityTheme);
// {
//  "basics.borderRadii.none": "0",
//  "basics.borderRadii.small":  "0"
//  "basics.borderRadii.medium":  "2px"
// ...
// }
```

### Access theme data as SCSS variables
```scss
@import "@hig/theme-data/build/scss/variables/_lightGrayMediumDensityTheme.scss";

.my-component {
    background-color: $colorScheme-surfaceLevel10Color;
    color: $colorScheme-textColor;
}
```

### Access theme data as LESS variables
```less
@import "@hig/theme-data/build/less/variables/_lightGrayMediumDensityTheme.less";

.my-component {
    background-color: @colorScheme-surfaceLevel10Color;
    color: @colorScheme-textColor;
}
```

## Available themes

There are eight themes made up of four color schemes a two densities each. These themes are importable in three formats from respective folders in the build folder: [ESM](./build/esm), [JSON](./build/json), [SCSS](./build/scss), and [LESS](./build/less) 

* Light gray, medium (default) and high density 
* Dark gray, medium and high density 
* Dark blue, medium and high density
* Web light, medium and high density - DEPRECATED

## Structure of a theme
A theme is comprised of many, many _roles_. Each _roles_ defines the meaning of a value in the design system. Consider the following role—`colorScheme.textColor`. This roles describes the default color of text in the design system. The _value_ for a role may vary from theme to theme. For example, a theme with a light gray color scheme may provide the value `"#3c3c3c"`. A theme with a dark blue color scheme may provide the value `"#f5f5f5"`.

A component can be made themable by styling it using theme data roles rather than hard-coded values.

### Types of roles
Roles fall into 3 broad categories—basic roles, dimension roles, and component roles.

#### Basic roles
Basics are named values (colors, spacings, typographic specifications, etc.) from which (very nearly) all other values in a theme are derived. Basics **do not change** from theme to theme.

#### Dimension roles
Each themes presently has two dimensions—a color scheme, and a density.

##### Color scheme roles
Color scheme roles define roles related to color that change from theme to theme. They apply to many components.

A few examples of color scheme roles:

- `colorScheme.textColor`: The default color for text throught a theme. Value will be dark in a ligher theme, and light in a dark theme to contrast with surface colors.
- `colorScheme.surfaceLevel10Color`: The most prominant background color for containers in the theme. Will be lighter in a light theme, darker in a darker theme.
- `colorScheme.accentColor`: A bold color used to provide emphasis in the theme.

##### Density roles
Density roles are reoles related to information density. They change from theme to theme.

A couple of examples of density roles:

- `density.fontSizes.medium`: Text size for body copy in an app. Value will be smaller in a high-density theme.
- `density.spacing.medium`: A width of space between elements. Will be smaller in a high-density theme, larger in a lower-desnity theme.

##### Component roles
Component roles defined every property needed to express the design for a component in all of its states.

A few examples of component roles

- `button.outline.borderColor`: The default border color for an outline variant button
- `button.outline.hover.borderColor`: The border color of a button when the mouse is above it
- `button.outline.focus.borderColor`: The border color of a button when it has keyboard focus

### Resolved and unresolved roles
Values in a theme may take two forms. They may be a basic value in string format (e.g. "#0696d7" or "4px") or a value may be a reference to another value. For example, `textArea.focus.borderBottomColor` may refer to `colorScheme.accentColor`, which refers to `basics.colors.autodeskBlue600`. Theme data source code is stored in a format that represents these relationships. These relationships are rarely needed in product, so we _resolve_ the relatinships into a flat list of values for typical use.

#### Unresolved roles
An unresolved role defines a primitive value _or_ a reference to another role in the system.

Here are some unresolved roles:
```js
  basics.colors.autodeskBlue500: {
    type: "color", // Type is used to validate values and create documentation at development time
    value: "#0696d7" // This is a primitive value
  },
  colorScheme.accentColor: {
    type: "color",
    value: { // This is a reference to another value
      ref: "basics.colors.autodeskBlue500"
    }
  },
```

#### Resolved roles
A resolved role defines a primitive value (e.g. “#0696D7” or “16px”) in the theme system.

Here are the two previous roles after being resolved:
```js
  basics.colors.autodeskBlue500: "#0696d7",
  colorScheme.accentColor: "#0696d7", // Value has been resolved to equal basics.colors.autodeskBlue500
```

## Extend a theme to make a new variation
```js
import unresolvedTheme from '@hig/theme-data/build/esm/unresolved/lightGrayMediumDensityTheme';
import { extendTheme, resolveTheme } from '@hig/theme-data';

const redAccentedUnresolvedTheme = extendTheme(unresolvedTheme.unresolvedRoles, {
    "colorScheme.accentColor": { value: "#F00" }
});
const redAccentedTheme = resolveTheme(redAccentedUnresolvedTheme);

console.log(redAccentedTheme);
// {
// ...
//  "colorScheme.accentColor": "#F00",
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
