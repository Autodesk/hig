import React from "react";
import CheckboxAdapter from "../../../adapters/FormElements/CheckboxAdapter";
import * as PropTypes from "prop-types";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    const controlled = props.checked === undefined ? false : true;

    this.state = {
      checked: this.getDefaultChecked(),
      controlled
    };
  }

  static defaultProps = {
    onChange: () => {}
  };

  getDefaultChecked() {
    const { defaultChecked, checked } = this.props;

    if (checked !== undefined) {
      return checked;
    } else if (defaultChecked !== undefined) {
      return defaultChecked;
    } else {
      return false;
    }
  }

  getRenderedChecked() {
    const { checked } = this.props;

    if (checked !== undefined) {
      return checked;
    } else {
      return this.state.checked;
    }
  }

  handleChange = event => {
    this.props.onChange(event);
    if (this.checkboxEl) {
      if (this.state.controlled) {
        this.checkboxEl.forceNextReset();
        this.setState({ checked: this.state.checked });
      } else  {
        this.setState({ checked: event.target.checked });
      }
    }
  };

  setCheckboxEl = checkboxEl => {
    this.checkboxEl = checkboxEl;
  };

  render() {
    return (
      <CheckboxAdapter
        ref={this.setCheckboxEl}
        checked={this.getRenderedChecked()}
        disabled={this.props.disabled}
        name={this.props.name}
        label={this.props.label}
        required={this.props.required}
        value={this.props.value}
        onChange={this.handleChange}
        onFocus={this.props.onFocus}
        onHover={this.props.onHover}
      />
    );
  }
}

Checkbox.__docgenInfo = {
  props: {
    checked: {
      description: "boolean - sets whether the checkbox is checked"
    },
    disabled: {
      description: "boolean - sets whether the checkbox is disabled"
    },
    label: {
      description: "sets the label text for the checkbox"
    },
    name: {
      description: "sets the name attribute of the checkbox input"
    },
    required: {
      description: "string - sets the whether the checkbox is required and displays the provided message"
    },
    value: {
      description: "sets the value attribute of the checkbox input"
    },
    onHover: {
      description: "triggers when you hover over the button"
    },
    onChange: {
      description: "triggers when you check/uncheck the checkbox"
    },
    onFocus: {
      description: "triggers the checkbox component receives focus"
    }
  }
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func
};

export default Checkbox;
