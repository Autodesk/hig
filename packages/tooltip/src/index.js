import ContentPresenter from "./presenters/ContentPresenter";
import TextPresenter from "./presenters/TextPresenter";
import Tooltip from "./Tooltip";

Tooltip.Content = ContentPresenter;
Tooltip.Text = TextPresenter;

export { anchorPoints, AVAILABLE_ANCHOR_POINTS } from "@hig/flyout";
export {
  ContentPresenter as Content,
  TextPresenter as Text,
  Tooltip as default,
};
