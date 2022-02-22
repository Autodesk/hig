/* eslint-disable */

import React from 'react';
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";
import Button from "@hig/button";
import TextLink from "@hig/text-link";
import IconButton from '@hig/icon-button';
import Checkbox from '@hig/checkbox';

import stylesheet from "./stylesheet";

const TilePresenter = props => {
  const {
    headerContainer: HeaderContainer,
    title,
    subtitle,
    version,
    identifier,
    statusAndActionIcons,
    notification,
    overflowMenu,
    cta,
    actionClarifier,
    showCheckbox,
    showPin,
    surface,
    hasFocus,
    hasHover,
    isPressed,
    onBlur,
    onClick,
    onFocus,
    onHover,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    selected,
  } = props;

  const handleClickCTA = action => {
    action();
  };
console.log('isPressed', isPressed);
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles, metadata);
        return (
          <div
            className={css(styles.higTileContainer)}
            tabIndex={0}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={cta ? () => handleClickCTA(cta?.action) : onClick}
          >
            {notification && 
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
            </div>
            <div className={css(styles.higTileHeader)}>
              <div className={css(styles.higTileHeaderContainer)}>
                <HeaderContainer />
                {actionClarifier && (
                  <div className={css(styles.higTileActionClarifier)}>
                    <div className={css(styles.higTileActionClarifierButton)}>
                      <Button title={actionClarifier} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={css(styles.higTileContent)}>
              {identifier && 
                <div className={css(styles.higTileIdentifierContainer)}>
                  <div className={css(styles.higTileIdentifierIcon)}>{identifier}</div>
                </div>
              }
              <div className={css(styles.higTileTitleContainer)}>
                <div className={css(styles.higTileTitle)}>{title}</div>
                {overflowMenu && <div className={css(styles.higTileOverflowMenu)}>{overflowMenu}</div>}
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
              {cta && 
                <div className={css(styles.higTileCTAHolder)}>
                  <div className={css(styles.higTileCTA)} >
                    {cta?.type === 'button' 
                      ? <Button title={cta?.text} onClick={() => handleClickCTA(cta?.action)} />
                      : <TextLink onClick={() => handleClickCTA(cta?.action)}>{cta?.text}</TextLink>
                    }
                  </div>
                </div>
              }
            </div> 
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TilePresenter;
