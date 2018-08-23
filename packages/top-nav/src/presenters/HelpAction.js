import React from "react";
import PropTypes from "prop-types";
import { combineEventHandlers } from "@hig/utils";
import Icon, { names } from "@hig/icon";
import Flyout, { anchorPoints } from "@hig/flyout";
import "@hig/flyout/build/index.css";
import "@hig/icon/build/index.css";

import Action from "./Action";

export default function HelpAction({ children, onClick }) {
  return (
    <Action>
      <Flyout anchorPoint={anchorPoints.TOP_RIGHT} content={children}>
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
