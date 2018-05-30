import "@hig/styles/build/fonts.css";

import Action from "./presenters/Action";
import HelpAction from "./presenters/HelpAction";
import Interactions from "./presenters/Interactions";
import Logo from "./presenters/Logo";
import LogoText from "./presenters/LogoText";
import ProfileAction from "./presenters/ProfileAction";
import ProfileContent from "./presenters/ProfileContent";
import TopNav from "./presenters/TopNav";

import "./top-nav.scss";

TopNav.Action = Action;
TopNav.HelpAction = HelpAction;
TopNav.Interactions = Interactions;
TopNav.Logo = Logo;
TopNav.LogoText = LogoText;
TopNav.ProfileAction = ProfileAction;
TopNav.ProfileContent = ProfileContent;

export { Action, HelpAction, Interactions, Logo, ProfileAction };

export default TopNav;
