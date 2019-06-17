import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./stylesheet";

const separator = "/";

class SampleComponentBreadcrumbs extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children, ...otherProps } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet({}, resolvedRoles);

          return (
            <ul style={styles.wrapper} {...otherProps}>
              {React.Children.toArray(children)
                .filter(child => React.isValidElement(child))
                .map((child, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li style={styles.item} key={`item-${index}`}>
                    {child}
                  </li>
                ))
                .reduce((acc, current, index) => {
                  if (index !== 0) {
                    acc.push(
                      // eslint-disable-next-line react/no-array-index-key
                      <li style={styles.separator} key={`separator-${index}`}>
                        {separator}
                      </li>
                    );
                  }
                  acc.push(current);
                  return acc;
                }, [])}
            </ul>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default SampleComponentBreadcrumbs;
