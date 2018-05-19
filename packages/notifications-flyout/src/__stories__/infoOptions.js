import React from "react";
import RichText from "@hig/rich-text";
import TextLink from "@hig/text-link";
import NotificationsFlyoutInteraction from "./NotificationsFlyoutInteraction";

import DefaultExport from "../index";
import readme from "../../README.md";

export default {
  propTables: [DefaultExport],
  propTablesExclude: [NotificationsFlyoutInteraction, TextLink],
  source: true,
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
