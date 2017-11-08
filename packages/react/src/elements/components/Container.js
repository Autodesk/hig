import React from "react";
import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="hig__container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node
};

Container.defaultProps = {
  children: null
};

Container.__docgenInfo = {
  props: {
    children: {
      description: "react-generated markup to render within"
    }
  }
};

export default Container;
