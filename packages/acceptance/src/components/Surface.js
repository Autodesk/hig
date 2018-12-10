import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '@hig/theme-context';

function Surface({ children, paddingSize, style: styleProp, ...otherProps }) {
  return (
    <ThemeContext.Consumer>{({ resolvedRoles }) => {
      const style = {
        backgroundColor: resolvedRoles["colorScheme.surfaceLevel100Color"],
        marginBottom: resolvedRoles["density.spacings.large"],
        ...styleProp
      }
      if (paddingSize) {
        style.padding = resolvedRoles[`density.spacings.${paddingSize}`];
      }

      return (
        <div
          style={style}
          {...otherProps}
        >{children}</div>
      )
    }}</ThemeContext.Consumer>
  )
}

Surface.propTypes = {
  paddingSize: PropTypes.oneOf([
    "extraExtraSmall",
    "extraSmall",
    "small",
    "medium",
    "large",
    "extraLarge",
    "extraExtraLarge",
    "none"
  ])
}

Surface.defaultProps = {
  paddingSize: "large"
}

export default Surface;
