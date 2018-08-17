import Flyout from "./Flyout";
import Panel from "./presenters/PanelContainerPresenter";

Flyout.Panel = Panel;

export { Flyout as default, Panel };
export {
  anchorPoints,
  availableAnchorPoints,
  availableAnchorPoints as AVAILABLE_ANCHOR_POINTS
} from "./anchorPoints";
