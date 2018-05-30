import React from "react";
import PropTypes from "prop-types";

import LogoText from "./LogoText";

function renderChildren(children) {
  if (typeof children === "string") {
    return <LogoText>{children}</LogoText>;
  }

  return children;
}

export default function Logo({
  label,
  link,
  title,
  onClick,
  children,
  dangerouslySetInnerHTML
}) {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      className="hig__top-nav__logo"
      href={link}
      title={title}
      aria-label={label}
      onClick={onClick}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {renderChildren(children)}
    </Wrapper>
  );
}

Logo.propTypes = {
  /** A11y label */
  label: PropTypes.string,
  /** URL to link to */
  link: PropTypes.string,
  /** A11y title */
  title: PropTypes.string,
  /** Click event listener */
  onClick: PropTypes.func,
  /** Logo content */
  children: PropTypes.node,
  /** Proxy for React's `dangerouslySetInnerHTML` */
  // eslint-disable-next-line react/forbid-prop-types
  dangerouslySetInnerHTML: PropTypes.any
};
