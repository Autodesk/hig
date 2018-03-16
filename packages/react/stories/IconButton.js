import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs/react";
import { IconButton } from "../src/hig-react";
import arrayToObject from "../.storybook/helpers/arrayToObject";

const iconKeys = [
  "add",
  "archive",
  "assets",
  "attachment",
  "back",
  "bookmark",
  "building-ops",
  "calendar",
  "caret",
  "check-white",
  "checklist",
  "checkmark-blue-dark",
  "checkmark",
  "clear-small",
  "clock",
  "close-hamburger",
  "close-small",
  "close",
  "collaboration",
  "collapse-panel",
  "collapse",
  "comment",
  "compare",
  "complete",
  "copy",
  "cost-control",
  "document-management",
  "double-caret",
  "download",
  "edit",
  "expand-panel",
  "expand",
  "export",
  "external",
  "external-link",
  "favorite",
  "field",
  "file-assembly",
  "file-document",
  "file-generic",
  "file-image",
  "file-part",
  "file-pdf",
  "file-presentation",
  "file-spreadsheet",
  "file-video",
  "file-zip",
  "filter-tokens",
  "filter",
  "folder-open",
  "folder",
  "forward",
  "globe",
  "grid",
  "hamburger",
  "help",
  "hidden",
  "home",
  "insight",
  "issue",
  "item",
  "layout",
  "list",
  "location",
  "lock",
  "model-coordination",
  "paste",
  "permission-group",
  "permission-individual",
  "photos",
  "play",
  "print",
  "profile",
  "project-management",
  "publish",
  "quantities",
  "redo",
  "rfi",
  "save",
  "search",
  "settings",
  "share",
  "sync",
  "tag",
  "trash",
  "undo",
  "unlock",
  "upload",
  "visible",
  "x-close-gray"
];

storiesOf("IconButton", module).add("primary", () => (
  <IconButton
    type={select("Type", arrayToObject(["primary", "flat", "transparent"]))}
    title={text("Title", "Icon button")}
    link={text("Link", "http://www.autodesk.com")}
    disabled={boolean("Disabled", false)}
    icon={select("Icon name", arrayToObject(iconKeys), "settings")}
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
