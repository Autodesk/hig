# HIG Architecture

React is a flexible system, and there are many options for the architecture of components. When implementing new HIG React components it is required to create components which follow these architecture guidelines. 

## React Version

HIG React supports React 15.4.1 and above. This means we cannot use features from more recent versions, such as the Hook system added in version 16.8. We need to support existing applications which use older versions of React. 

## Stateless React Components

We require stateless components when possible. All data needed to render a component should be passed in properties passed in to the component at runtime. Components that take user input, like __Input__ and __Dropdown__ should provide callback properties that notify clients when the input has changed. This common pattern for React components makes them easier to write, maintain, test and can have better performance. For more information see:

+ [React Functional or Class Components: Everything you need to know](https://programmingwithmosh.com/react/react-functional-components/)
+ [React Stateless Functional Components: Nine Wins You Might Have Overlooked](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc)
+ [Stateful vs Stateless React Components](https://medium.com/@cgcrutch18/stateful-vs-stateless-react-components-13f647f7fc4)
+ [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)

### Class components vs Functional components

Although most current components in HIG React are class-based, we prefer functional components for future contributions. However, even the class-based components are stateless, since they don't declare a _state_ member. Some older legacy code, like _Slider_ is a stateful component, but that is the exception. The [Input](packages/input/src/Input.js) component is a great example of a stateless, functional component that handles user input.

### Attaching state

Of course, some functionality does require state to render correctly, such as implementing support for behaviors like rollover highlighting. For cases like this, it is best to attach state to a components with reusable stateful components. The _HoverBehavior_ class is a good example of this. It is used to attach rollover highlighting to components in a reusable way. The _ControlBehavior_ class adds Focus, Hover and Pressed behaviors to a component in a reusable way.

### Render Props

The _Behavior_ classes mentioned above use [Render Props](https://reactjs.org/docs/render-props.html) to pass state from the behavior class to the components they are attached to. This passes the hover state to the stateless rendering methods of the attached components. The components themselves use these properties to render the state in a way that is appropriate for that component. For an example of the use of render props when attaching standard control behaviors, see the [Input](packages/input/src/Input.js) component. 

## Theming support

### Theme data

All HIG React components are required to support [theme data](packages/theme-data/README.md). If new theme data is required for a component, adding that data should be coordinated with Bryan Young on the HIG team.

To implement theme support, components are required to use the [_ThemeContext_](packages/theme-context/README.md) class.

### CSS Stylesheets

Every HIG React component should support passing in custom style overrides as a prop. The "stylesheet" prop is a function that returns a JSON style object. [TextArea](packages/text-area/src/customStylesheet.js) has a good example of a stylesheet function. HIG components use [emotion](https://github.com/emotion-js/emotion) as their css JavaScript library: .

