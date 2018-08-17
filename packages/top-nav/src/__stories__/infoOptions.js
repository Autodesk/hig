import React from "react";
import RichText from "@hig/rich-text";
import readme from "../../README.md";
import {
  TopNav,
  Action,
  HelpAction,
  Interactions,
  Logo,
  LogoText,
  ProfileAction,
  ProfileContent
} from "../index";

export default {
  propTables: [
    TopNav,
    Action,
    HelpAction,
    Interactions,
    Logo,
    LogoText,
    ProfileAction,
    ProfileContent
  ],
  source: true,
  text: <RichText dangerouslySetInnerHTML={{ __html: readme }} />
};
