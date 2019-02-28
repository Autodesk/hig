import React from "react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import Banner from "../Banner";
import getKnobs from "./getKnobs";

/**
 * @param {string} placement
 * @returns {Object.<string, string>}
 */
function getBannerWrapperStyle(placement) {
  const verticalPositionProperty =
    placement === Banner.placements.BELOW_OVERLAY ? "bottom" : "top";

  return {
    position: "fixed",
    left: "0",
    right: "0",
    [verticalPositionProperty]: "0"
  };
}

/**
 * So that storybook info can render the source accurately,
 * this isn't a component.
 * @param {import("../Banner").BannerProps} props
 * @returns {JSX.Element}
 */
export default function renderBannerStory(props) {
  const { children, ...otherProps } = getKnobs(props);
  const { placement } = otherProps;
  const bannerWrapperStyle = getBannerWrapperStyle(placement);

  return (
    <KnobbedThemeProvider>
      <div style={bannerWrapperStyle}>
        <Banner {...otherProps}>{children}</Banner>
      </div>
    </KnobbedThemeProvider>
  );
}
