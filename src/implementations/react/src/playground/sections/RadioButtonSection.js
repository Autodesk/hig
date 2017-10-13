import React, { PureComponent } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { RadioButton } from '../../hig-react';

const checkboxStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};

function logEvent(event) {
  let messageParts = [
    `RadioButton triggered a ${event.type} event`
  ];
  if (event.target.value !== undefined) {
    messageParts = messageParts.concat(`: ${event.target.value}`);
  }
  console.log(messageParts.join(''));
}

class RadioButtonSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 'asd'
    };
  }

  setValue = (event) => {
    console.log('CHANGE', event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <PlaygroundSection title="RadioButton">
        <div style={checkboxStyle}>
          <div>empty button<RadioButton /></div><hr />
          <RadioButton
            label="I AGREE"
            name="tsandcs"
            value="asd"
            required="Required"
            onChange={this.setValue}
            checked={this.state.value === 'asd'}
          />
          <RadioButton
            label="Not required"
            name="tsandcs"
            value="dfdf"
            required={null}
            onChange={this.setValue}
            checked={this.state.value === 'dfdf'}
          />
          <RadioButton
            label="Disabled"
            name="tsandcs"
            value="hhh"
            disabled
            onChange={this.setValue}
            checked={this.state.value === 'hhh'}
          />
          <RadioButton
            label="Checked"
            name="tsandcs"
            value="werr"
            onChange={this.setValue}
            checked={this.state.value === 'werr'}
          />
          {' '}
          <hr />
          <RadioButton
            label="Click me"
            onHover={logEvent}
            onChange={logEvent}
            onFocus={logEvent}
          />
        </div>
      </PlaygroundSection>
    );
  }
}
export default RadioButtonSection;
