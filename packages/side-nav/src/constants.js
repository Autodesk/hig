const constants = {
  sideNavMaxWidth: "280px"
};

// from packages/styles/tokens/breakpoints.scss
const _breakpoints = {
  phone: 0,
  tablet: 769,
  laptop: 1281,
  desktop: 1681,
  large: 1921
};

// from packages/styles/mixins/breakpoints.scss
const mq = Object.keys(_breakpoints).reduce(
  (obj, key) =>
    Object.assign(obj, { [key]: `@media (min-width: ${_breakpoints[key]}px)` }),
  {}
);

function reset(styles) {
  return Object.assign(
    {
      fontFamily: "ArtifaktElement",
      lineHeight: "1.6",
      boxSizing: "border-box"
    },
    styles
  );
}

function typographyBase(props, themeData, styles) {
  return Object.assign(
    {
      fontFamily: themeData[`typography.body.fontFamily`],
      fontSize: themeData[`typography.body.fontSize`],
      fontWeight: themeData[`typography.body.fontWeight`],
      lineHeight: themeData[`typography.body.lineHeight`]
    },
    styles
  );
}

function groupSeparator(props, themeData, styles) {
  return Object.assign(
    {
      "&:after": {
        position: "absolute",
        top: "auto",
        bottom: 0,
        height: "1px",
        display: "block",
        content: '""',
        left: themeData["density.spacings.extraSmall"],
        right: themeData["density.spacings.extraSmall"],
        borderTop: `${themeData["divider.borderWidth"]} solid ${
          themeData["divider.heavyColor"]
        }`,

        [mq.tablet]: {
          left: themeData["density.spacings.medium"],
          right: themeData["density.spacings.small"]
        }
      }
    },
    styles
  );
}

export { mq, constants, groupSeparator, typographyBase, reset };
