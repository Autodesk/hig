import stylesheet from "./AvatarBundle.stylesheet";

const fakeThemeData = {
  "basics.fontFamilies.main": "fancy-font",
  "avatar.extraSmall.diameter": "23px",
  "avatarBundle.default.backgroundColor": "#FF0000",
  "avatarBundle.fontColor": "#00FF00",
  "avatarBundle.medium.border": "3px",
  "avatarBundle.extraLarge.border": "5px",
  "avatarBundle.medium.superCondensed.spacing.secondItem": "13px",
  "avatarBundle.medium.superCondensed.spacing.thirdItem": "17px",
};

describe("stylesheet", () => {
  it("contains expected properties", () => {
    const styles = stylesheet({}, {});

    expect(styles).toEqual(expect.any(Object));
    expect(styles).toHaveProperty("avatarBundleContainer", expect.any(Object));
    expect(styles).toHaveProperty("avatarWrapper", expect.any(Object));
    expect(styles).toHaveProperty("avatarWrapperFirstItem", expect.any(Object));
    expect(styles).toHaveProperty(
      "avatarWrapperSecondItem",
      expect.any(Object)
    );
    expect(styles).toHaveProperty("avatarWrapperThirdItem", expect.any(Object));
    expect(styles).toHaveProperty("avatarOverflowCount", expect.any(Object));
  });

  it("sets width and height based on Avatar stylesheet", () => {
    const styles = stylesheet({ size: "small" }, fakeThemeData);

    expect(styles.avatarWrapper.width).toEqual("23px");
    expect(styles.avatarWrapper.height).toEqual("23px");
  });

  it("sets boxShadow value based on borderColor value", () => {
    const styles = stylesheet(
      { size: "extralarge", spacing: "condensed", borderColor: "#FCFCFC" },
      fakeThemeData
    );

    expect(styles.avatarWrapperFirstItem.clipPath).toEqual(undefined);
    expect(styles.avatarWrapperSecondItem.clipPath).toEqual("");
    expect(styles.avatarWrapperThirdItem.clipPath).toEqual("");
    expect(styles.avatarOverflowCount.clipPath).toEqual("");

    expect(styles.avatarWrapper.boxShadow).toEqual("0 0 0 5px #FCFCFC");
  });

  it("sets clipPath value based on size and spacing props", () => {
    const styles = stylesheet(
      { size: "extralarge", spacing: "condensed" },
      fakeThemeData
    );

    expect(styles.avatarWrapperFirstItem.clipPath).toEqual(undefined);
    expect(styles.avatarWrapperSecondItem.clipPath).toEqual(
      "url(#avatar-bundle-clip-extraLarge-condensed)"
    );
    expect(styles.avatarWrapperThirdItem.clipPath).toEqual(
      "url(#avatar-bundle-clip-extraLarge-condensed)"
    );
    expect(styles.avatarOverflowCount.clipPath).toEqual(
      "url(#avatar-bundle-clip-extraLarge-condensed)"
    );

    expect(styles.avatarWrapper.boxShadow).toEqual("");
  });

  it("sets margin based on spacing for 3 avatars", () => {
    const styles = stylesheet({ spacing: "superCondensed" }, fakeThemeData);

    expect(styles.avatarWrapperFirstItem.marginLeft).toEqual(undefined);
    expect(styles.avatarWrapperSecondItem.marginLeft).toEqual("13px");
    expect(styles.avatarWrapperThirdItem.marginLeft).toEqual("17px");
    expect(styles.avatarOverflowCount.marginLeft).toEqual("17px");
  });

  it("sets colors for overflow icon", () => {
    const styles = stylesheet({}, fakeThemeData);

    expect(styles.avatarOverflowCount.backgroundColor).toEqual("#FF0000");
    expect(styles.avatarOverflowCount.color).toEqual("#00FF00");
  });

  it("sets fontFamily based on Avatar stylesheet", () => {
    const styles = stylesheet({}, fakeThemeData);

    expect(styles.avatarOverflowCount.fontFamily).toEqual("fancy-font");
  });

  it("returns the custom stylesheet if provided one", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 37 }) }, {})).toEqual({
      padding: 37,
    });
  });
});
