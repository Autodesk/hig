import CollapseButton from "./CollapseButton";
import Group from "./Group";
import Link from "./Link";
import Module, { ModuleCompact } from "./Module";
import Search from "./Search";
import Submodule from "./Submodule";
import SideNav from "./presenters/SideNav";

SideNav.CollapseButton = CollapseButton;
SideNav.Group = Group;
SideNav.Link = Link;
SideNav.Module = Module;
SideNav.ModuleCompact = ModuleCompact;
SideNav.Search = Search;
SideNav.Submodule = Submodule;

export { default as SideNavSkeleton } from "./SideNavSkeleton";
export { default as Docked } from "./containers/Docked";
export { default as BelowTopNav } from "./containers/BelowTopNav";
export { default as BelowTopNavCompact } from "./containers/BelowTopNavCompact";
export default SideNav;
