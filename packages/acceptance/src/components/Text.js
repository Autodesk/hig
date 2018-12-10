import React from 'react';

import ThemeContext from '@hig/theme-context';

function Text({ children }) {
  return (
    <ThemeContext.Consumer>{(({ resolvedRoles }) => (
      <p
        style={{
          color: resolvedRoles["colorScheme.textColor"],
          fontSize: resolvedRoles["density.fontSizes.medium"],
          margin: `0 0 ${resolvedRoles["density.spacings.small"]} 0`,
          fontFamily: resolvedRoles["basics.fontFamilies.main"]
        }}
      >{children}</p>
    ))}</ThemeContext.Consumer>
  )
}

export default Text;
