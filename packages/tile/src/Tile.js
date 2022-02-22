import React from "react";
import { ThemeContext } from "@hig/theme-context";
import TileBehavior from './behaviors/TileBehavior';

const Tile = () => {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <TileBehavior>
          {
            () => (
              <>
                <div>Container</div>
                <div>Title</div>
                <div>Subtitle</div>
              </>
            )
          }
        </TileBehavior>
      )}
    </ThemeContext.Consumer>
  );
}

export default Tile;
