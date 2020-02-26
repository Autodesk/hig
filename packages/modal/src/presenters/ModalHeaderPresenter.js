import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@hig/icon-button";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";
import { CloseSUI, CloseMUI } from "@hig/icons";
import { createCustomClassNames } from "@hig/utils";
import { css, cx } from "emotion";

export default class ModalHeaderPresenter extends Component {
  static propTypes = {
    /**
     * Supports adding any dom content to the header of the modal
     */
    children: PropTypes.node,
    /**
     * ARIA label attribute for the close button if/when children
     * are not utilized
     */
    closeButtonAriaLabel: PropTypes.string,
    /**
     * ID for a11y
     */
    id: PropTypes.string,
    /**
     * Triggers when one clicks the close button
     */
    onCloseClick: PropTypes.func,
    /**
     * Styles for the modal header
     */
    styles: PropTypes.objectOf(PropTypes.any),
    /**
     * Title of the modal
     */
    title: PropTypes.string
  };

  static defaultProps = {
    closeButtonAriaLabel: "close"
  };

  renderChildren() {
    const { children, id, styles } = this.props;
    return (
      <header className={css(styles)} id={id}>
        {children}
      </header>
    );
  }

  render() {
    const {
      children,
      closeButtonAriaLabel,
      id,
      onCloseClick,
      title,
      styles,
      ...otherProps
    } = this.props;
    const { className } = otherProps;

    return children ? (
      this.renderChildren()
    ) : (
      <ThemeContext.Consumer>
        {({ metadata }) => {
          const closeIcon =
            metadata.densityId === "medium-density" ? (
              <CloseMUI />
            ) : (
              <CloseSUI />
            );
          const headerClassName = createCustomClassNames(
            className,
            "modal-header"
          );
          const headerContentClassName = createCustomClassNames(
            className,
            "modal-header-content"
          );
          return (
            <header className={cx(css(styles.header), headerClassName)} id={id}>
              <div
                className={cx(
                  css(styles.headerContent),
                  headerContentClassName
                )}
              >
                <Typography
                  style={{
                    fontSize: `inherit`,
                    fontWeight: `inherit`,
                    lineHeight: `inherit`
                  }}
                >
                  {title}
                </Typography>
                <IconButton
                  aria-label={closeButtonAriaLabel}
                  icon={closeIcon}
                  onClick={onCloseClick}
                  title="Close"
                />
              </div>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
