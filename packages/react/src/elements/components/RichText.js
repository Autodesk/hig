/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";
import { RichText as VanillaRichText } from "hig-vanilla";

function RichText(props) {
  return props.children ? (
    <div className={VanillaRichText.className}>{props.children}</div>
  ) : (
    <div
      className={VanillaRichText.className}
      dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
    />
  );
}

RichText.propTypes = {
  children: PropTypes.node,
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string
  })
};

RichText.defaultProps = {
  children: null,
  dangerouslySetInnerHTML: null
};

RichText.__docgenInfo = {
  props: {
    children: {
      description: "react-generated markup to style with HIG typography rules"
    },
    dangerouslySetInnerHTML: {
      description:
        "HTML string to be rendered and styled with HIG typography rules"
    }
  }
};

export default RichText;
