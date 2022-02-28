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
    version,
    identifier,
    statusAndActionIcons,
    notification,
    tooltip,
    overflowMenu,
    cta,
    actionClarifier,
    checkbox,
    showCheckbox,
    pinIcon,
    showPin,
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
                version={version}
                identifier={identifier}
                statusAndActionIcons={statusAndActionIcons}
                notification={notification}
                tooltip={tooltip}
                overflowMenu={overflowMenu}
                cta={cta}
                actionClarifier={actionClarifier}
                checkbox={checkbox}
                showCheckbox={showCheckbox}
                pinIcon={pinIcon}
                showPin={showPin}
              />
            )
          }
        </TileBehavior>
      )}
    </ThemeContext.Consumer>
  );
}

export default Tile;
