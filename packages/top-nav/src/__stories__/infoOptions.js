import React from "react";
import RichText from "@hig/rich-text";
import "@hig/rich-text/build/index.css";

import readme from "../../README.md";
import TopNav, {
  Action,
  HelpAction,
  Interactions,
  Logo,
  ProfileAction
} from "../index";

export default {
  propTables: [TopNav, Action, HelpAction, Interactions, Logo, ProfileAction],
  source: true,
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
