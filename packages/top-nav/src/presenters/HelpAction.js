import React from "react";
import PropTypes from "prop-types";
import Icon, { names } from "@hig/icon";
import { combineEventHandlers } from "@hig/utils";
/** @todo Move flyout into its own package */
import Flyout from "hig-react/lib/elements/components/Flyout";

import "@hig/icon/build/index.css";
import "hig-react/lib/hig-react.css";

import Action from "./Action";

export default function HelpAction({ children, onClick }) {
  return (
    <Action>
      <Flyout anchorPoint="top-right" content={children}>
        {({ handleClick }) => (
          <button
            className="hig__top-nav__help-action"
            onClick={combineEventHandlers(onClick, handleClick)}
          >
            <Icon name={names.HELP} />
          </button>
        )}
      </Flyout>
    </Action>
  );
}

HelpAction.propTypes = {
  /** Content to render inside the help flyout */
  children: PropTypes.node,
  /** Callback when the flyout is opened */
  onClick: PropTypes.func
};
