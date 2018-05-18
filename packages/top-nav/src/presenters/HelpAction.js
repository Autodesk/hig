import React from "react";
import PropTypes from "prop-types";
import Icon, { names } from "@hig/icon";
/** @todo Move flyout into its own package */
import Flyout from "hig-react/lib/elements/components/Flyout";

import "@hig/icon/build/index.css";
import "hig-react/lib/hig-react.css";

import Action from "./Action";

export default function HelpAction({ children }) {
  return (
    <Action>
      <Flyout anchorPoint="top-right" content={children}>
        <button className="hig__top-nav__help-action">
          <Icon name={names.HELP} />
        </button>
      </Flyout>
    </Action>
  );
}

HelpAction.propTypes = {
  /** Content to render inside the help flyout */
  children: PropTypes.node
};
