import React from "react";
import PropTypes from "prop-types";

import { Consumer as BaseConsumer } from "./BaseContext";
import createThemeProxy from "./createThemeProxy";

const Consumer = (props) => (
  <BaseConsumer>
    {(theme) => {
      const isDebugging = process.env.NODE_ENV !== "production";
      const result = isDebugging ? createThemeProxy(theme) : theme;
      // eslint-disable-next-line no-console
      console.log("isDebugging", isDebugging);
      return props.children(result);
    }}
  </BaseConsumer>
);

Consumer.displayName = "Consumer";

Consumer.propTypes = {
  /** A theme provided to the consumer within */
  children: PropTypes.func,
};

export default Consumer;
