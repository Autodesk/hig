import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import LogoTextPresenter from "./LogoTextPresenter";
import stylesheet from "./stylesheet";

function renderChildren(children) {
  if (typeof children === "string") {
    return <LogoTextPresenter>{children}</LogoTextPresenter>;
  }

  return children;
}

export default function LogoPresenter({
  label,
  link,
  title,
  onClick,
  children,
  dangerouslySetInnerHTML
}) {
  const Wrapper = link ? "a" : "div";
  const styles = stylesheet();

  return (
    <Wrapper
      className={css(styles.topNavLogo)}
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

LogoPresenter.propTypes = {
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
