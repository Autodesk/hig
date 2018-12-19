import React from 'react';
import ThemeContext from '@hig/theme-context';

function ThemeTitle({ children }) {
  return (
    <ThemeContext.Consumer>{({ metadata, resolvedRoles }) => {
      return (
        <p style={{color: resolvedRoles["colorScheme.textColor"]}}>{metadata.name}</p>
      )
    }}</ThemeContext.Consumer>
  )
}

export default ThemeTitle;
