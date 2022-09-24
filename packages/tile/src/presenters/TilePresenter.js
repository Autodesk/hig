import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

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
    // version,
    // identifier,
    // statusAndActionIcons,
    // notification,
    // overflowMenu,
    // cta,
    // actionClarifier,
    // showCheckbox,
    // showPin,
    // surface,
    ...otherProps
  } = props;
  const {
    onBlur,
    // onClick,
    onFocus,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
  } = otherProps;

  // const handleClickCTA = action => {
  //   action();
  // };

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
            className={css(styles.higTileContainer)}
            onBlur={onBlur}
            // onClick={onClick}
            onFocus={onFocus}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            role="listitem"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            // onClick={cta ? () => handleClickCTA(cta?.action) : onClick}
          >
            {/* {notification && 
              <div className={css(styles.higTileNotifications)}>
                <div className={css(styles.higTileNotificationBadge)}>{notification?.component}</div>
              </div>
            }
            <div className={css(styles.higTileSelectionOptions)}>
              {showCheckbox && (
                <div className={css(styles.higTileSelectionOptionCheckbox)}>
                  <Checkbox
                    checked={false}
                    indeterminate={false}
                    onClick={() => {}}
                    tabIndex={-1}
                  />
                </div>
              )}
              {showPin && (
                <div className={css(styles.higTileSelectionOptionPin)}>
                  <Checkbox
                    checked={false}
                    indeterminate={false}
                    onClick={() => {}}
                    tabIndex={-1}
                  />
                </div>
              )}
            </div> */}
            <div className={css(styles.higMediaContainer)}>
              {/* <div className={css(styles.higTileHeaderContainer)}> */}
              {media}
              {/* {actionClarifier && (
                  <div className={css(styles.higTileActionClarifier)}>
                    <div className={css(styles.higTileActionClarifierButton)}>
                      <Button title={actionClarifier} />
                    </div>
                  </div>
                )} */}
              {/* </div> */}
            </div>

            <div className={css(styles.higTileContentContainer)}>
              {/* identifier && 
                <div className={css(styles.higTileIdentifierContainer)}>
                  <div className={css(styles.higTileIdentifierIcon)}>{identifier}</div>
                </div>
              */}
              <div className={css(styles.higTileTitleContainer)}>
                <div className={css(styles.higTileTitle)}>{title}</div>
                {/* {overflowMenu && <div className={css(styles.higTileOverflowMenu)}>{overflowMenu}</div>} */}
              </div>
              <div className={css(styles.higTileSubTitle)}>{subtitle}</div>

              {/* <div className={css(styles.higTileAdditionalContent)}>
                {version && <div className={css(styles.higVersionHolder)}>{version}</div>}
                {statusAndActionIcons && 
                  <div className={css(styles.higGroupIcons)}>
                    {statusAndActionIcons?.map((item, index) => {
                      return (
                        item.type === 'status'
                          ? <div className={css(styles.higGroupIconItem)} key={index}>{item?.icon}</div>
                          : <div className={css(styles.higGroupIconItem)} key={index}>
                              <IconButton
                                icon={item?.icon}
                                onClick={item?.action}
                                title=""
                              />
                            </div>
                      )
                    })}
                  </div>
                }
              </div> */}
              {/* {cta && 
                <div className={css(styles.higTileCTAHolder)}>
                  <div className={css(styles.higTileCTA)} >
                    {cta?.type === 'button' 
                      ? <Button title={cta?.text} onClick={() => handleClickCTA(cta?.action)} />
                      : <TextLink onClick={() => handleClickCTA(cta?.action)}>{cta?.text}</TextLink>
                    }
                  </div>
                </div>
              } */}
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
