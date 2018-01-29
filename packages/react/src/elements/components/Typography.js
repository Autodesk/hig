import React from "react";
import PropTypes from "prop-types";
import Typography from "../../adapters/TypographyAdapter";

function H1Component({ children, size, bold }) {
  return <Typography type="h1" bold={bold} size={size} text={children} />;
}

function H2Component({ children, size, bold }) {
  return <Typography type="h2" bold={bold} size={size} text={children} />;
}

function H3Component({ children, size, bold }) {
  return <Typography type="h3" bold={bold} size={size} text={children} />;
}

function Sub1Component({ children, size, bold }) {
  return <Typography type="sub1" bold={bold} size={size} text={children} />;
}

function Sub2Component({ children, size, bold }) {
  return <Typography type="sub2" bold={bold} size={size} text={children} />;
}

function BodyComponent({ children, size, bold }) {
  return <Typography type="body" bold={bold} size={size} text={children} />;
}

function BoldComponent({ children, size, bold }) {
  return <Typography type="bold" bold={bold} size={size} text={children} />;
}

function DisabledComponent({ children, size, bold }) {
  return <Typography type="disabled" bold={bold} size={size} text={children} />;
}

function CaptionComponent({ children, size, bold }) {
  return <Typography type="caption" bold={bold} size={size} text={children} />;
}

const docgenInfo = {
  props: {
    bold: {
      description: "Whether to render bold text"
    },
    size: {
      description: "One of: 'small', 'medium', 'large'"
    },
    children: {
      description: "any content"
    }
  }
};

const propTypes = {
  children: PropTypes.node
};

[
  H1Component,
  H2Component,
  H3Component,
  Sub1Component,
  Sub2Component,
  BodyComponent,
  BoldComponent,
  DisabledComponent,
  CaptionComponent
].forEach(componentClass => {
  componentClass.__docgenInfo = docgenInfo; // eslint-disable-line no-param-reassign
  componentClass.propTypes = propTypes; // eslint-disable-line no-param-reassign
});

export {
  H1Component as H1,
  H2Component as H2,
  H3Component as H3,
  Sub1Component as Sub1,
  Sub2Component as Sub2,
  BodyComponent as Body,
  BoldComponent as Bold,
  DisabledComponent as Disabled,
  CaptionComponent as Caption
};
