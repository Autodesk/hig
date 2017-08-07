## interface.json

Start by examining the hig.web [interface.json](https://github.com/adsk-hig/hig.web/blob/ce1abb8b8977e24ee393593df4feb480164bb42c/src/interface/interface.json#L37) and find the component you want to convert.

There are three sub-sections to every component:

1. `"methods"`

Methods have two jobs. They either change the view state of the component or they set up an event listener. Event listeners are identified by having the value of `HIG.abstract.EventObject`. As far as React is concerned methods and events need to be adapted to properties but the way we adapt them is slightly different.

2. `"partials"`

Partials are sub-components which can only exist in the context of the parent component. They are identical in all other respects. Construction of a partial is done via an instance of the parent. [See example](https://github.com/adsk-hig/hig.web/blob/ce1abb8b8977e24ee393593df4feb480164bb42c/src/web/components/global-nav/tests/tests-global-nav.html#L19). When adapting to React partials generally become child React Components. The [React Context](https://facebook.github.io/react/docs/context) API is [used to connect child nodes to their parents](https://github.com/Autodesk/orion-ui/blob/dd3d53c2d0e59c4c6668943dfe67517794308154/packages/react-hig/src/react-hig.js#L32) to construct hig.web instances.

3. `"defaults"`

Defaults are properties of a component which can be specified in the constructor function. The rule of thumb is to use the defaults as the React Component property names.

## React Component API

* Adapting a hig.web component to React roughly follows the following equation: `defaults + events + children`

### Defaults & Events

The hig.web defaults make perfect React Props. Events are a little tricky because in React we expect to be able to
pass a function to a property and have that function called back when the event is triggered:

```jsx
// define some handler function
function handler() {
  alert('myEvent dispatched');
}

// define component which uses function based property
const MyComponent = ({ myEvent }) => (
  <div onClick={myEvent}>Hello World</div>
);

// render
<MyComponent myEvent={handler} />
```

To illustrate how the defaults and events can be adapted from hig.web we'll look at the Basic Component `Button`. An example of how it's used can be found at `hig.web/src/web/basics/button/tests/tests-button.html. It's interface is in the hig.web interface.json which can be found `hig.web/src/interface/interface.json` at the `basics.Button` keypath:

```json
{
  "methods": {
      "setTitle": {
          "desc": "sets the title of a button",
          "params": [
              "{String} title - new title for the button"
          ]
      },
      "setLink": {
          "desc": "sets the link of a button",
          "params": [
              "{String} link - new link for the button"
          ]
      },
      "onClick": "HIG.abstract.EventObject",
      "onHover": "HIG.abstract.EventObject"
  },
  "defaults": {
      "title": "{String} title of the button",
      "link": "{String} link of the button"
  }
}
```

* Decide the JSX Element name: `Button`
* Start with empty props:

```typescript
interface Props {}
```

* Add the defaults:

```typescript
interface Props {
  // standard properties
  title: string;
  link: string;
}
```

Look through the methods and take any which has a value of `HIG.abstract.EventObject` and add it to the React Component Props:

```typescript
interface Props {
  // standard properties
  title: string;
  link: string;

  // events
  onClick: (...args: any[]) => void;
  onHover: (...args: any[]) => void;
}
```

You need to map properties to methods because in hig.web properties are only used during construction and then methods are used to mutate the state of an instance. In React the properties are also used at runtime to mutate the state.

In `react-hig` this mapping is done in a method which must be implemented for each component called `commitUpdate`

```typescript
interface HIGElement {
  /**
   * Update payload is an alternating array of PropKey/PropValue pairs.
   *
   * @example
   * updatePayload: ['title', 'foo', 'onClick', Function];
   */
  commitUpdate(updatePayload: any[], oldProps: {}, newProps: {}): void
}
```

Here is an example implementation showing how properties are mapped to methods in the button:

```typescript

class Button extends HIGElement {
  constructor(initialProps) {
    /**
     * HIGElement base class automatically passes defaults into the HIG.Button constructor
     * it also wires up the initial events.
     */
    super(HIG.Button, initialProps);
  }

  /**
   * hig-react calls commitUpdate AFTER diffing the old properties, the updatePayload
   * only contains property values which have changed or are new properties.
   */
  commitUpdate(updatePayload, oldProps, newProps) {
    // For every propKey/propValue pair in the updatePayload
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'title': {
          this.hig.setTitle(propValue);
          break;
        }

        case 'link': {
          this.hig.setLink(propValue);
          break;
        }

        case 'onClick':
        case 'onHover':
          this.replaceEvent(propKey, propValue);
          break;
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
    }
  }
}
```

### Methods with no defaults

In some cases methods exist on a component which do not have corresponding defaults. These methods need to be re-imagined as properties. This can be one of the hardest parts of designing the React Component API for a hig.web element because it is so subjective. To illustrate the point we'll build the props for the `GlobalNav` React component.

First here is it's `"methods"` from the interface.json:

```json
"addSideNav": {
    "desc": "Pass in an instance of a SideNav partial to mount it to the GlobalNav",
    "params": [
        "{SideNav} SideNav - instance of a SideNav partial"
    ],
    "returns": "{SideNav}"
},
"addContainer": {
    "desc": "Pass in an instance of a Container partial to mount it to the GlobalNav",
    "params": [
        "{Container} Container - instance of a Container partial"
    ]
},
"showSideNav": {
    "desc": "show the SideNav"
},
"hideSideNav": {
    "desc": "hide the SideNav"
}
```

`addSideNav` and `addContainer` are for appending different types of Child Components. We'll discuss this in the next section.

`showSideNav` and `hideSideNav` however are methods that we want to expose as props for the React Component. Since there is a symmetric relationship to the two methods a `boolean` can be used to invoke the appropriate method. So we decide on the following interface for the `GlobalNav` props:

```typescript
interface Props {
  /**
   * Controls the visibility of the side nav
   */
  sideNavOpen: boolean;
}
```

This property does not exist as a default so we need to call it manually. When mounting the GlobalNav we can do this by implementing the `componentDidMount` lifecycle method in our custom HIGElement:

```typescript
class GlobalNav extends HIGElement {
  constructor(initialProps) {
    super(HIG.GlobalNav, initialProps);
  }

  // method which is called after the HIGElement is mounted by react-hig
  componentDidMount() {
    // this.initialProps are the same props which are passed to the constructor function
    if (this.initialProps.sideNavOpen) {
      this.hig.showSideNav();
    } else {
      this.hig.hideSideNav();
    }
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    for (let i = 0; i < updatePayload.length; i += 2) {
      const propKey = updatePayload[i];
      const propValue = updatePayload[i + 1];

      switch (propKey) {
        case 'sideNavOpen': {
          if (propValue) {
            this.hig.showSideNav();
          } else {
            this.hig.hideSideNav();
          }
          break;
        }
        default: {
          console.warn(`${propKey} is unknown`);
        }
      }
  }
}
```

Above you can see we call the `showSideNav` or `hideSideNav` methods in two places:

1. `componentDidMount` - this sets up the initial view state of the component
2. `commitUpdate` - this is called in response to a change in the sideNavOpen property value

### Children (Partials)

Managing partials is the most complex part of adapting hig.web to React. In hig.web an instance of a parent is required to
construct an instance of a partial. react-hig manages this by using React Context to provide partial components access to their parent.


#### During Construction:

* if there is a parent instance in the React Context
  * call `parentInstance.createElement(type, props)`
* else
  * call the top level `createElement(type, props)`

Both of these methods are expected to return an instance of a sub-class of HIGElement (a react-hig construct).

#### After Mounting:

* if there is a parent instance in the React Context
  * call `parentInstance.insertBefore` or `parentInstance.appendChild` as needed
* else
  * call `instance.mount(domElement, anchorElement)`


Container elements need to implement both `insertBefore` and `appendChild` which have the following signature:

```typescript
interface ContainerElement {

}
```
HIGElement#mount is already implemented and by default calls the hig.web instance's #mount method.

#### Singleton children

GlobalNav -> {SideNav, Container}

<GlobalNav>
  <SideNav />
  <SideNav />
  <Container />
</GlobalNav>

#### Single collection of children

Section -> {Group[]}

<Section>
  <Group />
  <Group />
  <Group />
</Section>

#### Multiple child collections

SideNav -> {Section[], Link[]}


<SideNav sections={[<Section />, <Section />]} links={[<Link />, <Link />]}>
</SideNav>

<SideNav>
  <Sections>
    <Section />
    <Section />
  <Sections />

  <Links>
    <Link />
    <Link />
  </Links>
</SideNav>