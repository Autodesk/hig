const tinycolor = require("tinycolor2");

module.exports = {
  name: "color/alpha",
  type: "value",
  matcher: prop => {
    console.log(prop.attributes.category);
    return (
      prop.attributes.category === "color" &&
      prop.original.transform &&
      prop.original.transform.alpha === "color"
    );
  },
  transformer: prop => {
    console.log(prop);
    return tinycolor(prop.original.value)
      .setAlpha(prop.original.transform.alpha)
      .toRgbString();
  }
};
