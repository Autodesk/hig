import { createContext, useContext } from "react";
import defaultTheme from "@weave-design/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";

const { Provider, Consumer } = createContext(defaultTheme);
// const useThemeContext = () => useContext({Provider, Consumer});

export { Provider, Consumer };
