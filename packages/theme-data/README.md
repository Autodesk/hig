# HIG theme data proof-of-concept

HIG theme data is a representation of the HIG visual design language in the form of data.


## Getting started
```bash
yarn add @hig/theme-data
```

### Access theme data as json
```js
import lightGrayMediumDensityTheme from '@hig/theme-data/build/json/lightGrayMediumDensityTheme/resolvedRoles.json';

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
import resolvedRoles from '@hig/theme-data/build/json/lightGrayMediumDensityTheme/resolvedRoles.json';
import unresolvedRoles from '@hig/theme-data/build/json/lightGrayMediumDensityTheme/unresolvedRoles.json';
import { extendTheme, resolveTheme } from '@hig/theme-data';

const redAccentedUnresolvedTheme = extendTheme(unresolvedRoles, {
    "colorScheme.accentColor": "#F00",
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

### Access theme data as scss variables
```scss
@import "@hig/theme-data/build/scss/_lightGrayMediumDensityTheme.scss";

.my-component {
    background-color: $colorScheme-surfaceLevel10Color;
    color: $colorScheme-textColor;
}
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

## Structure of a theme
A theme is comprised of many, many _roles_. Each _roles_ defines the meaning of a value in the deisgn system. Consider the following role—`colorScheme.textColor`. This roles describes the default color of text in the design system. The _value_ for a role may vary from theme to theme. For example, a theme with a light gray color scheme may provide the value `"#3c3c3c"`. A theme with a dark blue color scheme may provide the value `"#f5f5f5"`.

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

- `colorScheme.textColor`: The default color for text throught a theme
- `coolorScheme.surfaceLevel10Color`: The most prominant background color for containers in the theme
- `colorScheme.accentColor`: A bold color used to provide emphasis in the theme

##### Density roles
Density roles
**** FINISH ME ****

##### Component roles
A property of a component provided by a theme. E.g. Consider the following role and value:

```json
{
    "divider.borderWidth": "1px",
    // ... other roles
}
```
**** FINISH ME ****

### Resolved and unresolved roles
**** FINISH ME ****

#### Resolved roles
A resolved role defines a primitive value (e.g. “#0696D7” or “16px”) in the theme system.

#### Unresolved roles
An unresolved role defines a primitive value _or_ a reference to another role in the system.




#### Reference
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

In data we model the theme as a flat map of key-value pairs. We represent the hierarchy in the key, but only as much as is needed to disambiguate one key from another. e.g. a role in the theme may have a key such as `textArea.disabled.textColor`. The key uses component name, state name, and property name but does not describe a category.

## Ideas discussed but not advanced at this time
- Stylesheet factories: Functions that map a theme and state to a stylesheet for a component
- Stylesheets: Data providing a set of styles for each state a component can enter
- Using theme schema to raise errors in development when attempting to access an undefined or mis-typed role
- Validating themes against a json schema
- Considering how a component will declare role dependencies
