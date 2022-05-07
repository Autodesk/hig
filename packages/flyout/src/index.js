import Flyout from "./Flyout";
import Panel from "./presenters/PanelContainerPresenter";

Flyout.Panel = Panel;

export { Flyout as default, Panel };
export {
  anchorPoints,
  AVAILABLE_ANCHOR_POINTS,
  /** @todo Remove alias */
  AVAILABLE_ANCHOR_POINTS as availableAnchorPoints,
} from "./anchorPoints";
export {
  dislocateContainer,
  offsetContainerHorizontal,
  offsetContainerVertical,
  offsetPanelHorizontal,
} from "./coordinateHelpers";
export { default as Pointer } from "./presenters/PointerPresenter";
export {
  transitionStatuses,
  AVAILABLE_TRANSITION_STATUSES,
} from "./transitionStatuses";
