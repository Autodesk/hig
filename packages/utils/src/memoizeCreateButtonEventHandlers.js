import memoize from "lodash.memoize";

import createButtonEventHandlers from "./createButtonEventHandlers";

export default function memoizeCreateButtonEventHandlers() {
  return memoize(createButtonEventHandlers);
}
