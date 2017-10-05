import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PasswordFieldAdapter
  from '../../../adapters/FormElements/NewPasswordFieldAdapter.js';
import controlled from '../../ControlledField';

class PasswordField extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    initialValue: PropTypes.string,
    instructions: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onInput: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    onBlur: () => {},
    onFocus: () => {},
    onChange: () => {},
    onInput: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      hasFocus: false
    };
  }

  handleBlur = (event) => {
    this.props.onBlur(event);
    this.setState({ hasFocus: false });
  }

  handleFocus = (event) => {
    this.props.onFocus(event);
    this.setState({ hasFocus: true });
  }

  handlePasswordHideButtonClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ showPassword: false });
  }

  handlePasswordRevealButtonClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ showPassword: true });
  }

  render() {
    return (
      <PasswordFieldAdapter
        {...this.props}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onPasswordHideButtonClick={this.handlePasswordHideButtonClick}
        onPasswordRevealButtonClick={this.handlePasswordRevealButtonClick}
        revealPassword={this.state.showPassword}
        showPasswordHideButton={this.state.hasFocus && this.state.showPassword}
        showPasswordRevealButton={this.state.hasFocus && !this.state.showPassword}
      />
    );
  }
}

PasswordField.__docgeninfo = {
  props: {
    disabled: {
      description: 'disable the field, preventing user interaction'
    },
    initialValue: {
      description: 'initial value of the field'
    },
    instructions: {
      description: 'a short description or suggestion'
    },
    label: {
      description: 'describes what the field controls'
    },
    name: {
      description: 'set on the element\'s name attribute'
    },
    onBlur: {
      description: 'called when user moves focus away from the field'
    },
    onChange: {
      description: 'called when user enters a new value and moves focus away from the field'
    },
    onFocus: {
      description: 'called when user moves focus onto the field'
    },
    onInput: {
      description: 'called when user enters a new value'
    },
    placeholder: {
      description: 'data entry suggestions or formatting examples'
    },
    required: {
      description: 'indicates a field must be filled before the form may be completed'
    },
    value: {
      description: 'controlled value of the field'
    }
  }
}

export default PasswordField;
