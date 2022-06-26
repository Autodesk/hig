import { createContext } from "react";
import defaultTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";

const { Provider, Consumer } = createContext(defaultTheme);

export { Provider, Consumer };
