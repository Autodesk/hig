// based on https://derickbailey.com/2016/03/09/
//   creating-a-true-singleton-in-node-js-with-es6-symbols/

import createReactContext from "create-react-context";
import defaultTheme from "@hig/theme-data/build/json/webLightMediumDensityTheme/theme.json";
import packageJson from "../../package.json";

const THEME_CONTEXT_LOADED_KEY = Symbol.for("Autodesk.Hig.ThemeContextLoaded");
const globalSymbols = Object.getOwnPropertySymbols(global);
const themeContextLoaded = globalSymbols.indexOf(THEME_CONTEXT_LOADED_KEY) > -1;

if (!themeContextLoaded) {
  global[THEME_CONTEXT_LOADED_KEY] = true;
} else {
  /* eslint-disable-next-line no-console */
  console.warn(
    "[warning] ThemeContext was previously loaded (inside version %s)",
    packageJson.version
  );
}

const { Provider, Consumer } = createReactContext(defaultTheme);

export { Provider, Consumer };
