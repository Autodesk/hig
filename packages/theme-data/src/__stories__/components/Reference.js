import React from "react";
import PropTypes from "prop-types";
import { Text } from "@hig/typography";

export default function Reference({ children }) {
  return (
    <div>
      <Text>
        Reference to: <code>{children}</code>
      </Text>
    </div>
  );
}

Reference.propTypes = {
  children: PropTypes.node
};
