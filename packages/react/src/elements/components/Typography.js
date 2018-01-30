import React from "react";
import PropTypes from "prop-types";
import Typography from "../../adapters/TypographyAdapter";

export function H1({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="h1"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function H2({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="h2"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function H3({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="h3"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function Text({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="text"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function Sub1({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="sub1"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function Sub2({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="sub2"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function Body({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="body"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function Bold({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="bold"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function Disabled({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="disabled"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
}

export function Caption({ children, size, bold, color, disabled }) {
  return (
    <Typography
      type="caption"
      bold={bold}
      size={size}
      color={color}
      disabled={disabled}
      text={children}
    />
  );
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
