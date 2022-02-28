import React from 'react';
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

const TilePresenter = (props) => {
  const {
    headerContainer: HeaderContainer,
    title,
    subtitle,
    version,
    identifier,
    statusIcons,
    actionIcons,
    notification,
    overflowMenu,
    cta,
    ctaType,
  } = props;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles);
        return (
          <div className={css(styles.higTileContainer)}>
            <div className={css(styles.higTileNotifications)}>
              <div className={css(styles.higTileNotificationBadge)}>{notification.type}</div>
            </div>
            <div className={css(styles.higTileHeader)}><HeaderContainer /></div>
            
            <div className={css(styles.higTileContent)}>
              <div className={css(styles.higTileIdentifierContainer)}>
                <div className={css(styles.higTileIdentifierIcon)}>{identifier}</div>
              </div>
              <div className={css(styles.higTileTitleContainer)}>
                <div className={css(styles.higTileTitle)}>{title}</div>
                <div className={css(styles.higTileOverflowMenu)}>{overflowMenu}</div>
              </div>
              <div className={css(styles.higTileSubTitle)}>{subtitle}</div>

              <div className={css(styles.higTileAdditionalContent)}>
                <div className={css(styles.higVersionHolder)}>{version}</div>
                <div className={css(styles.higGroupIcons)}>
                  {statusIcons[0]}
                  {actionIcons[0].icon}
                </div>
              </div>
              <div className={css(styles.higTileCTAHolder)}>
                <div className={css(styles.higTileCTA)}>
                  {cta}
                </div>
              </div>
            </div>
            
            
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TilePresenter;
