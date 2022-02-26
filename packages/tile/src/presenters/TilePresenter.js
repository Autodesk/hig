import React from 'react';
import { css } from "emotion";
import ThemeContext from "@hig/theme-context";

import stylesheet from "./stylesheet";

const TilePresenter = (props) => {
  const {
    headerContainer: HeaderContainer,
    title,
    subtitle,
  } = props;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(props, resolvedRoles);
        return (
          <div className={css(styles.higTileContainer)}>
            <div className={css(styles.higTileHeader)}><HeaderContainer /></div>
            <div className={css(styles.higTileContent)}>
              <div className={css(styles.higTileTitle)}>{title}</div>
              <div className={css(styles.higTileSubTitle)}>{subtitle}</div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TilePresenter;
