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
<StepIndicator>
  {this.props.steps.map(step => (
    <StepIndicator.Step
      complete={step.complete}
      active={step.id === this.props.activeStepId}
    />
  ))}
</StepIndicator>
```

## With numbered steps

```jsx
<StepIndicator>
  {this.props.steps.map((step, i) => (
    <StepIndicator.Step
      complete={step.complete}
      active={step.id === this.props.activeStepId}
      badge={`${i + 1}`}
    />
  ))}
</StepIndicator>
```

## With labels

```jsx
<StepIndicator>
  {this.props.steps.map(step => (
    <StepIndicator.Step
      complete={step.complete}
      active={step.id === this.props.activeStepId}
      label={step.label}
    />
  ))}
</StepIndicator>
```

## With labels above

```jsx
<StepIndicator>
  {this.props.steps.map(step => (
    <StepIndicator.Step
      complete={step.complete}
      active={step.id === this.props.activeStepId}
      label={step.label}
      labelPosition="above"
    />
  ))}
</StepIndicator>
```

## With non-linear step navigation

```jsx
<StepIndicator>
  {this.props.steps.map(step => (
    <StepIndicator.Step
      complete={step.complete}
      active={step.id === this.props.activeStepId}
      onActivate={this.props.onStepActivate} // Click or keyboard Enter when step has focus
    />
  ))}
</StepIndicator>
```

## PropTypes

```js
StepIndicator.proptypes = {}

Step.proptypes = {
  active: PropTypes.bool, // The currently active step
  complete: PropTypes.bool,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['above', 'below']),
  badge: PropTypes.string,
  onActivate: PropTypes.func,
  state: PropTypes.oneOf(['unstarted', 'started', 'complete']),
}
```
