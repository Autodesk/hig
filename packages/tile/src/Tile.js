import React from "react";
import { ThemeContext } from "@hig/theme-context";
import TileBehavior from './behaviors/TileBehavior';
import TilePresenter from './presenters/TilePresenter';

const Tile = (props) => {
  const {
    headerContainer,
    backgroundColor,
    divider,
    title,
    subtitle,
    orientation,
  } = props;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <TileBehavior>
          {
            () => (
              <TilePresenter 
                headerContainer={headerContainer}
                backgroundColor={backgroundColor}
                divider={divider}
                title={title}
                subtitle={subtitle}
                orientation={orientation}
              />
            )
          }
        </TileBehavior>
      )}
    </ThemeContext.Consumer>
  );
}

export default Tile;
