import createReactContext from "create-react-context";

import HIGLightTheme from "../themes/HIGLightTheme";

const { Provider, Consumer } = createReactContext(HIGLightTheme);

export { Provider, Consumer };
export default { Provider, Consumer };
