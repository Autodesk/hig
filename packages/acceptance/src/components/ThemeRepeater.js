import React from 'react';
import ThemeContext from '@hig/theme-context';

import lightGrayMediumTheme from '@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json';
import darkBlueMediumTheme from '@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json';
import webLightMediumTheme from '@hig/theme-data/build/json/webLightMediumDensityTheme/theme.json';
import lightGrayHighTheme from '@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json';
import darkBlueHighTheme from '@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json';
import webLightHighTheme from '@hig/theme-data/build/json/webLightHighDensityTheme/theme.json';

const themes = [lightGrayMediumTheme, darkBlueMediumTheme, webLightMediumTheme, lightGrayHighTheme, darkBlueHighTheme, webLightHighTheme];

function ThemeRepeater({ children }) {
  return (
    <div>
      {themes.map(theme => (
        <ThemeContext.Provider key={theme.metadata.id} value={theme}>
          {React.cloneElement(children)}
        </ThemeContext.Provider>
      ))}
    </div>
  )
}

export default ThemeRepeater;
