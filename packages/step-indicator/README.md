# Step Indicator

Step indicator is a UI element that enables and displays progress through a sequence of logical and numbered steps.

Read more about when and how to use the Step Indicator component [on the wiki](https://wiki.autodesk.com/display/HIG/Step+Indicator).

## Getting started

### Install the package

```bash
yarn add @hig/step-indicator
```

### Import the component and CSS

```js
import StepIndicator from '@hig/step-indicator';
import '@hig/step-indicator/build/index.css';
```

## Basic usage

```jsx
<StepIndicator activeStepIndex={this.props.activeStepIndex} onStepChange={this.props.onStepChange}>
  {this.props.steps.map(step => (
    <StepIndicator.Step />
  ))}
</StepIndicator>
```

## PropTypes

```js
StepIndicator.proptypes = {
  onStepChange: PropTypes.func,
  activeStepIndex: PropTypes.number,
  numbered: PropTypes.bool
}

Step.proptypes = {
  label: PropTypes.string,
  state: PropTypes.oneOf(['unstarted', 'started', 'complete']),
  active: PropTypes.bool, // The step with
  children: PropTypes.node // Optional, content to be displayed under a vertical step
}
```
