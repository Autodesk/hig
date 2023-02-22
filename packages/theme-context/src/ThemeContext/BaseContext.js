import { createContext } from "react";
import defaultTheme from "@weave-design/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";

const { Provider, Consumer } = createContext(defaultTheme);

export { Provider, Consumer };
