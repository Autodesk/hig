
import React from 'react';

/**
 * Returns the displayName of a React Component
 *
 * @param {React.ComponentClass | React.SFC<any>} Component
 */
const getDisplayName = Component =>
  Component.displayName ||
  Component.name ||
  (typeof Component === 'string' ? Component : 'Component');

/**
 * Create a PropType function which checks against a known set of valid child nodes
 * Useful for validating the child node types of a HIG Component.
 *
 * @param {(React.ComponentClass | React.SFC<any>)[]} validChildren an array of
 *  React.Component constructors
 *
 * @example
 *
 * GlobalNav.propTypes = {
 *  children: HIGChildValidator([SideNav, TopNav, SubNav])
 * }
 *
 */
const HIGChildValidator = validChildren =>
  (props, propName, componentName) => {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, child => {
      // Guard against null children
      if (child === null) {
        return;
      }

      const childDisplayName = getDisplayName(child.type || child);
      if (validChildren.indexOf(child.type) === -1) {
        error = new Error(
          `'${childDisplayName}' is not a valid child of ${componentName}. Children should be of type '${validChildren
            .map(c => c.displayName)
            .join(', ')}'.`
        );
      }
    });
    return error;
  };

export default HIGChildValidator;
