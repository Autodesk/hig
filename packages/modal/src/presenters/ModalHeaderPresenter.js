import React from "react";
import PropTypes from "prop-types";
import IconButton from "@hig/icon-button";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";
import { CloseSUI, CloseMUI } from "@hig/icons";
import { createCustomClassNames } from "@hig/utils";
import { css, cx } from "emotion";

const ModalHeaderPresenter = (props) => {
  const {
    children,
    closeButtonAriaLabel,
    id,
    onCloseClick,
    title,
    styles,
    ...otherProps
  } = props;
  const { className } = otherProps;

  const renderChildren = () => (
    <header className={css(styles)} id={id}>
      {children}
    </header>
  );

  return children ? (
    renderChildren()
  ) : (
    <ThemeContext.Consumer>
      {({ metadata }) => {
        const closeIcon =
          metadata.densityId === "medium-density" ? <CloseMUI /> : <CloseSUI />;
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
              className={cx(css(styles.headerContent), headerContentClassName)}
            >
              <Typography
                style={{
                  fontSize: `inherit`,
                  fontWeight: `inherit`,
                  lineHeight: `inherit`,
                }}
              >
                {title}
              </Typography>
              <IconButton
                aria-label={closeButtonAriaLabel}
                icon={closeIcon}
                onClick={onCloseClick}
                title={closeButtonAriaLabel}
              />
            </div>
          </header>
        );
      }}
    </ThemeContext.Consumer>
  );
};

ModalHeaderPresenter.displayName = "ModalHeaderPresenter";

ModalHeaderPresenter.propTypes = {
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
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.objectOf(PropTypes.any),
  /**
   * Title of the modal
   */
  title: PropTypes.node,
};

ModalHeaderPresenter.defaultProps = {
  closeButtonAriaLabel: "Close",
};

export default ModalHeaderPresenter;
