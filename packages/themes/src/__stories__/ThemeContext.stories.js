import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { makeSelectOptions } from "@hig/storybook/utils";

import Banner from "@hig/banner";
import readme from '../../README.md';
import { ThemeContext, HIGLightTheme, MatrixTheme } from '@hig/themes';


const typeOptions = makeSelectOptions(Banner.types);
const themeOptions = {
  "hig-light": "HIG Light",
  "matrix": "BIM360 Matrix"
}

const themes = {
  "hig-light": HIGLightTheme,
  "matrix": MatrixTheme
}

const themeContextStories = storiesOf("ThemeContext", module);

themeContextStories.add("themable", withInfo({
  propTables: [ThemeContext.Provider, ThemeContext.Consumer],
  propTablesExclude: [Banner],
  text: <div dangerouslySetInnerHTML={{__html: readme}}></div>,
})(() => {
  const theme = select('Theme', themeOptions, 'hig-light');
  const bannerType = select("Banner type", typeOptions, Banner.types[0]);
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <Banner type={bannerType}>{`This message presented in ${themeOptions[theme]} theme`}</Banner>
    </ThemeContext.Provider>
  );
}));
