import "@hig/styles/build/fonts.css";

import ActionPresenter from "./presenters/ActionPresenter";
import HelpAction from "./HelpAction";
import Interactions from "./Interactions";
import LogoPresenter from "./presenters/LogoPresenter";
import LogoTextPresenter from "./presenters/LogoTextPresenter";
import NotificationsAction from "./NotificationsAction";
import ProfileAction from "./ProfileAction";
import ProfileContentPresenter from "./presenters/ProfileContentPresenter";
import SeparatorPresenter from "./presenters/SeparatorPresenter";
import TopNavPresenter from "./presenters/TopNavPresenter";

TopNavPresenter.Action = ActionPresenter;
TopNavPresenter.Interactions = Interactions;
TopNavPresenter.Logo = LogoPresenter;
TopNavPresenter.LogoText = LogoTextPresenter;
TopNavPresenter.Separator = SeparatorPresenter;

/**
 * @todo Remove the static properties below
 * Adding components as static property creates a convenient API,
 * but at the cost of breaking tree-shaking.
 *
 * While `HelpAction` and `ProfileAction` are relatively lightweight,
 * `NotificationsAction` is quite heavy due to its dependance upon `@hig/notifications-flyout`.
 * `NotificationsAction` shouldn't be added as a static property,
 * and for the sake of consistency neither should HelpAction` and `ProfileAction`.
 */
TopNavPresenter.HelpAction = HelpAction;
TopNavPresenter.ProfileContent = ProfileContentPresenter;
TopNavPresenter.ProfileAction = ProfileAction;

export {
  HelpAction,
  Interactions,
  NotificationsAction,
  ProfileAction,
  ActionPresenter as Action,
  LogoPresenter as Logo,
  LogoTextPresenter as LogoText,
  ProfileContentPresenter as ProfileContent,
  SeparatorPresenter as Separator
};

export default TopNavPresenter;
