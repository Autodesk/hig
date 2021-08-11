import React, { Component } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { Search24, CloseSUI } from "@hig/icons";
import {
  createCustomClassNames,
  memoizeCreateButtonEventHandlers
} from "@hig/utils";
import stylesheet from "./stylesheet";

export default class Search extends Component {
  static propTypes = {
    /**
     * Called when search input loses focus.
     */
    onBlur: PropTypes.func,
    /**
     * Called when clicking icon to clear input.
     */
    onClearIconClick: PropTypes.func,
    /**
     * Called when search input gains focus.
     */
    onFocus: PropTypes.func,
    /**
     * Called when input changes.
     */
    onChange: PropTypes.func,
    /**
     * Placeholder text for the input field.
     */
    placeholder: PropTypes.string,
    /**
     * Function to modify the component's styles
     */
    stylesheet: PropTypes.func,
    /**
     * Value of the input field. Can be changed after mount to update the input value.
     */
    value: PropTypes.string
  };

  static defaultProps = {
    value: ""
  };

  state = {
    value: this.props.value
  };

  createEventHandlers = memoizeCreateButtonEventHandlers();

  callPropsOnChange = event =>
    this.props.onChange && this.props.onChange(event);

  handleChange = event => {
    this.setState({ value: event.target.value }, this.callPropsOnChange(event));
  };

  handleClear = () =>
    this.setState(
      { value: "" },
      () => this.props.onClearIconClick && this.props.onClearIconClick()
    );

  render() {
    const {
      onBlur,
      onFocus,
      placeholder,
      stylesheet: customStylesheet,
      ...otherProps
    } = this.props;
    const { className } = otherProps;
    const { handleClick, handleKeyDown } = this.createEventHandlers(
      this.handleClear
    );
    const iconClassName = createCustomClassNames(className, "icon");
    const inputWrapperClassName = createCustomClassNames(
      className,
      "input_wrapper"
    );
    const inputClassName = createCustomClassNames(className, "input");
    const clearClassName = createCustomClassNames(className, "clear");

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            { stylesheet: customStylesheet, ...this.props },
            resolvedRoles
          );
          return (
            <div className={cx([css(styles.search), className])}>
              <div className={cx([css(styles.icon), iconClassName])}>
                <Search24 />
              </div>

              <div
                className={cx([
                  css(styles.inputWrapper),
                  inputWrapperClassName
                ])}
              >
                <input
                  className={cx([css(styles.input), inputClassName])}
                  type="text"
                  onBlur={onBlur}
                  onFocus={onFocus}
                  onChange={this.handleChange}
                  placeholder={placeholder}
                  value={this.state.value}
                />
              </div>

              {this.state.value &&
                this.state.value.length > 0 && (
                  <div
                    className={cx([css(styles.clear), clearClassName])}
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={0}
                  >
                    <CloseSUI />
                  </div>
                )}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
