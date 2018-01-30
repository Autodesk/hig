import React from "react";
import PropTypes from "prop-types";
import Typography from "../../adapters/TypographyAdapter";

export function H1({ children, ...remainingProps }) {
  return <Typography type="h1" text={children} {...remainingProps} />;
}

export function H2({ children, ...remainingProps }) {
  return <Typography type="h2" text={children} {...remainingProps} />;
}

export function H3({ children, ...remainingProps }) {
  return <Typography type="h3" text={children} {...remainingProps} />;
}

export function Text({ children, ...remainingProps }) {
  return <Typography type="text" text={children} {...remainingProps} />;
}

export function Sub1({ children, ...remainingProps }) {
  console.warn(
    "Component Sub1 is deprecated and will be removed in the next version"
  );
  return <Typography type="sub1" text={children} {...remainingProps} />;
}

export function Sub2({ children, ...remainingProps }) {
  console.warn(
    "Component Sub2 is deprecated and will be removed in the next version"
  );
  return <Typography type="sub2" text={children} {...remainingProps} />;
}

export function Body({ children, ...remainingProps }) {
  console.warn(
    "Component Body is deprecated and will be removed in the next version"
  );
  return <Typography type="body" text={children} {...remainingProps} />;
}

export function Bold({ children, ...remainingProps }) {
  console.warn(
    "Component Bold is deprecated and will be removed in the next version"
  );
  return <Typography type="bold" text={children} {...remainingProps} />;
}

export function Disabled({ children, ...remainingProps }) {
  console.warn(
    "Component Disabled is deprecated and will be removed in the next version"
  );
  return <Typography type="disabled" text={children} {...remainingProps} />;
}

export function Caption({ children, ...remainingProps }) {
  console.warn(
    "Component Caption is deprecated and will be removed in the next version"
  );
  return <Typography type="caption" text={children} {...remainingProps} />;
}

const docgenInfo = {
  props: {
    bold: {
      description: "Whether to render bold text"
    },
    color: {
      description:
        "A text color. One of: 'hig-white', 'hig-cool-gray-70', 'hig-blue-50', 'hig-green-good', 'hig-yellow-warning', 'hig-red-alert'"
    },
    disabled: {
      description: "Whether to show text as disabled"
    },
    opacity: {
      description: "An opacity value to modify the color, between 0.0 and 1.0"
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
  /**
   * Whether to render bold text
   */
  bold: PropTypes.bool,
  /**
   * A color to apply to the containing text
   */
  color: PropTypes.oneOf([
    "hig-white",
    "hig-cool-gray-70",
    "hig-blue-50",
    "hig-green-good",
    "hig-yellow-warning",
    "hig-red-alert"
  ]),
  /**
   * Whether to show text as disabled
   */
  disabled: PropTypes.bool,
  /**
   * An opacity value to modify the color, between 0.0 and 1.0
   */
  opacity: PropTypes.number,
  /**
   * A size to apply to the containing text
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Text to render
   */
  children: PropTypes.node
};

[H1, H2, H3, Text, Sub1, Sub2, Body, Bold, Disabled, Caption].forEach(
  componentClass => {
    componentClass.__docgenInfo = docgenInfo; // eslint-disable-line no-param-reassign
    componentClass.propTypes = propTypes; // eslint-disable-line no-param-reassign
  }
);
