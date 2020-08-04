import React from 'react';

import ThemeContext from '@hig/theme-context';

function stylesheet({ variant }, theme) {
  const defaults = {
    fontFamily: theme["basics.fontFamilies.main"],
    color: theme["colorScheme.text.default"],
    fontSize: theme["density.fontSizes.medium"],
    margin: `0 0 ${theme["density.spacings.small"]} 0`,
    fontWeight: theme['basics.fontWeights.medium']
  }

  if (variant === 'h1') {
    return {
      ...defaults,
      fontSize: theme["density.fontSizes.extraLarge"],
      margin: `0 0 ${theme["density.spacings.medium"]} 0`,
    }
  } else if (variant === 'h2') {
    return {
      ...defaults,
      fontSize: theme["density.fontSizes.large"],
      margin: `0 0 ${theme["density.spacings.medium"]} 0`,
    }
  } else {
    return defaults
  }
}

function Text({ variant, children }) {
  return (
    <ThemeContext.Consumer>{(({ resolvedRoles }) => (
      <p
        style={stylesheet({ variant }, resolvedRoles)}
      >{children}</p>
    ))}</ThemeContext.Consumer>
  )
}

export default Text;
