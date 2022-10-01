import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";

import {
  AVAILABLE_BACKGROUNDS,
  AVAILABLE_LEVELS,
  AVAILABLE_ORIENTATIONS,
} from "../constants";
import stylesheet from "./stylesheet";

const TilePresenter = (props) => {
  const {
    background,
    contentWidth,
    disabled,
    divider,
    hasFocus,
    hasHover,
    isPressed,
    media,
    orientation,
    selected,
    stylesheet: customStylesheet,
    surface,
    title,
    subtitle,
    ...otherProps
  } = props;
  const {
    className,
    onBlur,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
  } = otherProps;

  const mediaContainerClassName = createCustomClassNames(
    className,
    "media-container"
  );
  const contentContainerClassName = createCustomClassNames(
    className,
    "content-container"
  );
  const titleContainerClassName = createCustomClassNames(
    className,
    "title-container"
  );
  const titleClassName = createCustomClassNames(className, "title");
  const subtitleClassName = createCustomClassNames(className, "subtitle");

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          {
            background,
            contentWidth,
            disabled,
            divider,
            hasFocus,
            hasHover,
            isPressed,
            orientation,
            selected,
            stylesheet: customStylesheet,
            surface,
          },
          resolvedRoles,
          metadata
        );

        return (
          // there is not a suitable interactive role for this component
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <div
            {...otherProps}
            className={cx([className, css(styles.higTileContainer)])}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            role="listitem"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
          >
            <div
              className={cx([
                mediaContainerClassName,
                css(styles.higMediaContainer),
              ])}
            >
              {media}
            </div>
            <div
              className={cx([
                contentContainerClassName,
                css(styles.higTileContentContainer),
              ])}
            >
              <div
                className={cx([
                  titleContainerClassName,
                  css(styles.higTileTitleContainer),
                ])}
              >
                <div className={cx([titleClassName, css(styles.higTileTitle)])}>
                  {title}
                </div>
              </div>
              <div
                className={cx([subtitleClassName, css(styles.higTileSubTitle)])}
              >
                {subtitle}
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

TilePresenter.propTypes = {
  background: PropTypes.oneOf(AVAILABLE_BACKGROUNDS),
  contentWidth: PropTypes.string,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  hasFocus: PropTypes.bool,
  hasHover: PropTypes.bool,
  isPressed: PropTypes.bool,
  media: PropTypes.node,
  orientation: PropTypes.oneOf(AVAILABLE_ORIENTATIONS),
  selected: PropTypes.bool,
  stylesheet: PropTypes.func,
  subtitle: PropTypes.string,
  surface: PropTypes.oneOf(AVAILABLE_LEVELS),
  title: PropTypes.string,
};

export default TilePresenter;
