import icons from "./release/hig-icons-bundle.json";
import names from "./release/hig-icon-names.json";
import sets from "./release/hig-icon-sets.json";

const AVAILABLE_NAMES = Object.freeze(Object.values(names));

export { icons as default, AVAILABLE_NAMES, names, sets };
