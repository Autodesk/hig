import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select, text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { RichText } from "hig-react";

import IconButton from "../IconButton";
import readme from "../../README.md";

const icons = [
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
  "checkmark",
  "checkmark-blue-dark",
  "clear-small",
  "clock",
  "close",
  "close-hamburger",
  "close-small",
  "collaboration",
  "collapse",
  "collapse-panel",
  "comment",
  "compare",
  "complete",
  "copy",
  "cost-control",
  "document-management",
  "double-caret",
  "download",
  "edit",
  "expand",
  "expand-panel",
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
  "filter",
  "filter-tokens",
  "folder",
  "folder-open",
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

storiesOf("IconButton", module).add(
  "default",
  withInfo({
    propTables: [IconButton],
    text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
  })(() => (
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
      onClick={action("onClick")}
      onBlur={action("onBlur")}
      onFocus={action("onFocus")}
      onHover={action("onHover")}
    />
  ))
);
