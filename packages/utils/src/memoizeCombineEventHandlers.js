import memoize from "lodash.memoize";

import combineEventHandlers from "./combineEventHandlers";

export default function memoizeCombineEventHandlers() {
  return memoize(combineEventHandlers);
}
