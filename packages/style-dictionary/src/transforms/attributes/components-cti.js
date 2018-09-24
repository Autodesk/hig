module.exports = {
  name: "attribute/component-cti",
  type: "attribute",
  matcher: prop =>
    !(
      prop.path.includes("basic") ||
      prop.path.includes("color-scheme") ||
      prop.path.includes("density")
    ),
  transformer: prop => {
    const [component, state, item] = prop.path;
    prop.attributes.component = component;
    prop.attributes.state = state;
    prop.attributes.item = item;

    console.log(prop);
    return prop;
  }
};
