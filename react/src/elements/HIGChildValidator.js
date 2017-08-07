/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
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
