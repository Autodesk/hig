import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs/react";
import { IconButton } from "../src/hig-react";

const icons = {
  add: "add",
  archive: "archive",
  assets: "assets",
  attachment: "attachment",
  back: "back",
  bookmark: "bookmark",
  "building-ops": "building-ops",
  calendar: "calendar",
  caret: "caret",
  "check-white": "check-white",
  checklist: "checklist",
  checkmark: "checkmark",
  "checkmark-blue-dark": "checkmark-blue-dark",
  "clear-small": "clear-small",
  clock: "clock",
  close: "close",
  "close-hamburger": "close-hamburger",
  "close-small": "close-small",
  collaboration: "collaboration",
  collapse: "collapse",
  "collapse-panel": "collapse-panel",
  comment: "comment",
  compare: "compare",
  complete: "complete",
  copy: "copy",
  "cost-control": "cost-control",
  "document-management": "document-management",
  "double-caret": "double-caret",
  download: "download",
  edit: "edit",
  expand: "expand",
  "expand-panel": "expand-panel",
  export: "export",
  external: "external",
  "external-link": "external-link",
  favorite: "favorite",
  field: "field",
  "file-assembly": "file-assembly",
  "file-document": "file-document",
  "file-generic": "file-generic",
  "file-image": "file-image",
  "file-part": "file-part",
  "file-pdf": "file-pdf",
  "file-presentation": "file-presentation",
  "file-spreadsheet": "file-spreadsheet",
  "file-video": "file-video",
  "file-zip": "file-zip",
  filter: "filter",
  "filter-tokens": "filter-tokens",
  folder: "folder",
  "folder-open": "folder-open",
  forward: "forward",
  globe: "globe",
  grid: "grid",
  hamburger: "hamburger",
  help: "help",
  hidden: "hidden",
  home: "home",
  insight: "insight",
  issue: "issue",
  item: "item",
  layout: "layout",
  list: "list",
  location: "location",
  lock: "lock",
  "model-coordination": "model-coordination",
  paste: "paste",
  "permission-group": "permission-group",
  "permission-individual": "permission-individual",
  photos: "photos",
  play: "play",
  print: "print",
  profile: "profile",
  "project-management": "project-management",
  publish: "publish",
  quantities: "quantities",
  redo: "redo",
  rfi: "rfi",
  save: "save",
  search: "search",
  settings: "settings",
  share: "share",
  sync: "sync",
  tag: "tag",
  trash: "trash",
  undo: "undo",
  unlock: "unlock",
  upload: "upload",
  visible: "visible",
  "x-close-gray": "x-close-gray"
};

storiesOf("IconButton", module).add("default", () => (
  <IconButton
    type={select("Type", {
      primary: "primary",
      flat: "flat",
      transparent: "transparent"
    })}
    title={text("Title", "Icon button")}
    link={text("Link", "http://www.autodesk.com")}
    disabled={boolean("Disabled", false)}
    icon={select("Icon name", icons, "settings")}
    onClick={action("Clicked")}
    onBlur={() => {
      console.log("onblur");
    }}
    onFocus={() => {
      console.log("focus");
    }}
    onHover={() => {
      console.log("hover");
    }}
  />
));
