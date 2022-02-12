import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { Search24, CloseLUI } from "@hig/icons";
import {
  createCustomClassNames,
  memoizeCreateButtonEventHandlers
} from "@hig/utils";
import stylesheet from "./stylesheet";

const Search = props => {
  const [value, setValue] = useState(props.value);
  const [onHandleChange, setOnHandleChange] = useState(false);

  const createEventHandlers = memoizeCreateButtonEventHandlers();

  const callPropsOnChange = event => props.onChange && props.onChange(event);

  const handleChange = event => {
    setValue(event.target.value);
    setOnHandleChange(event);
  };
  const handleClear = () => setValue("");

  const {
    onBlur,
    onFocus,
    placeholder,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const { handleClick, handleKeyDown } = createEventHandlers(handleClear);
  const iconClassName = createCustomClassNames(className, "icon");
  const inputWrapperClassName = createCustomClassNames(
    className,
    "input_wrapper"
  );
  const inputClassName = createCustomClassNames(className, "input");
  const clearClassName = createCustomClassNames(className, "clear");

  useEffect(() => {
    if (onHandleChange) {
      callPropsOnChange(onHandleChange);
    }
  }, [onHandleChange]);

  useEffect(() => {
    if (value === "") {
      // eslint-disable-next-line no-unused-expressions
      props.onClearIconClick && props.onClearIconClick();
    }
  }, [value]);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          { stylesheet: customStylesheet, ...props },
          resolvedRoles
        );
        return (
          <div className={cx([css(styles.search), className])}>
            <div className={cx([css(styles.icon), iconClassName])}>
              <Search24 />
            </div>

            <div
              className={cx([css(styles.inputWrapper), inputWrapperClassName])}
            >
              <input
                className={cx([css(styles.input), inputClassName])}
                type="text"
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={handleChange}
                placeholder={placeholder}
                value={value}
              />
            </div>

            {value && value.length > 0 && (
              <div
                className={cx([css(styles.clear), clearClassName])}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
              >
                <CloseLUI />
              </div>
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Search.displayName = "Search";

Search.propTypes = {
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

Search.defaultProps = {
  value: ""
};

export default Search;
