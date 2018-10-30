import createReactContext from "create-react-context";
import defaultTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";

const { Provider, Consumer } = createReactContext(defaultTheme);

export { Provider, Consumer };
