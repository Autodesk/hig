# Tile

The Tile component renders a themable container that display information related to a single subject or destination

## Getting started

```
yarn add @hig/tile @hig/theme-context @hig/theme-data
```

## Import the component

```
import Tile from '@hig/tile';
```

## Basic usage

```jsx
<Tile />
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Surface also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Tile from '@hig/tile';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    surface: {
      ...styles.surface,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <Tile stylesheet={customStylesheet} />
  );
}
```
## Props


### Header Container
Takes a component that will be loaded into container
```
<Component />

- ImageHolder
- Carousel
```

### Background Color
Sets background color for tile
```
omit to have no background

solid/outline/flat???
```

### Divider
```
set color of divider
omit to have no divider
```

### Title
Set title text for tile

### SubTitle
Set subtitle text for tile

### Orientation
vertical/horizontal
```
orientation="vertical"

```


### Version
Optional
Presented as badge
Not interactable
```
version={<Complete16 />}

```

### Identifier Icon
Optional
Identifies the type of item
Not interactable
```
identifier={<Archive16 />}
```

### Status and Action Items
Status icon (optional)

Additional information about item
Not interactable

Action icon (optional)

Any actions associated with item
Interactable
```
const statusAndActionIcons =[{type: 'status', icon: <Alert16 />}, {type: 'status', icon: <Complete16 />}, {type: 'action', icon: <Download16 />, action: () => {console.log('testing download')}}, {type: 'action', icon: <Edit16 />, action: () => {console.log('testing edit')}}];

statusAndActionIcons={statusAndActionIcons}

```

### Notification
Optional
Higher priority, at-a-glance status indicator
Three types:
   -  A: Colored dot
   -  B: Colored circle with logo inside
   -  C: Colored pill (aka extended circle) with short text message inside
Interactability optional
```
const notification = {type: 'pill', component: <Complete16 />};
notification={notification}
```

### Notification Tooltip
Optional
Additional information about notification
Text only
Not interactable
Tooltip is not recommended if the notification itself contains text (type C above)
Use Small tooltip
```
tooltip="click here"

tooltip={<Component />}

```


### Overflow Menu
Optional
In line with first line of primary text
Use vertical “kebab” icon to avoid confusion with ellipsis if primary text is truncated
Interactable (opens flyout menu with additional tile options/actions)
```
overflowMenu={<MoreVertical16 />}
```

### Call to Action (CTA)
Optional
Presented as text link or button
Interactable
```
const cta = {type: 'button', text: 'click here', action: () => {console.log('testing click')}}
cta={cta}
```

### Action Clarifier
Optional
Presented as button on hover to identify what will happen when user clicks
Appears over image area
Button should be accompanied by an overlay on the image (e.g. an opacity of white or black) to improve visibility
```
actionClarifier="click on clarifier";
```

### Checkbox
Optional
```
checkbox={checkbox}
showCheckbox={showCheckbox} - default show or on hover(false)
```

### Pin Icon
Optional
```
pinIcon={pinIcon}
showPin={showPin} - default show or on hover(false)
```
