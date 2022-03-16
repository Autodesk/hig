const constants = themeData => {
  const base = {
    colorMapping: {
      error: "urgent",
      primary: "info",
      complete: "success",
      urgent: "error",
      warning: "warning",
      info: "primary",
      success: "complete"
    },
    bannerActionPaddingY: themeData["density.spacings.extraExtraSmall"],
    bannerActionSpacingX: themeData["density.spacings.large"],
    bannerContentPaddingX: themeData["density.spacings.medium"],
    bannerContentSpacingMin: "125px",
    bannerDismissIconButtonWidth: "36px",
    bannerDismissIconWidth: "10px",
    bannerDismissSpacingRight: "50px",
    bannerMessageFontSize: "14px",
    bannerMessageLineHeight: "20px",
    bannerNotificationWidthMax: "900px",
    bannerNotificationWidthMin: "200px",
    bannerWrapperMinHeight: "50px"
  };

  const bannerDismissIconPadding = `calc((${base.bannerDismissIconButtonWidth} - ${base.bannerDismissIconWidth}) / 2)`;
  const bannerDismissSpacingRightInteractive = base.bannerActionSpacingX;
  const bannerContentSpacingY = `calc((${base.bannerWrapperMinHeight} - ${base.bannerMessageFontSize}) / 2)`;

  return Object.assign(base, {
    bannerContentSpacingY,
    bannerDismissIconPadding,
    bannerDismissSpacingRightInteractive,
    bannerDismissPaddingRight: `calc(${base.bannerDismissSpacingRight} - ${bannerDismissIconPadding})`,
    bannerDismissPaddingRightInteractive: `calc(${bannerDismissSpacingRightInteractive} - ${base.bannerDismissIconPadding})`,
    bannerDismissPaddingTopWrapping: `calc(${bannerContentSpacingY} - ${base.bannerDismissIconPadding})`,
    bannerInteractionsWrapperPaddingY: `calc(${bannerContentSpacingY} - ${base.bannerActionPaddingY})`,
    bannerMessagePaddingY: `calc((${base.bannerWrapperMinHeight} - ${base.bannerMessageLineHeight}) / 2)`
  });
};

export default constants;
