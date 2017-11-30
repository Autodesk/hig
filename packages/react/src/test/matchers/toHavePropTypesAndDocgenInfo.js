function checkDocgenInfo(Component) {
  if (!Component.__docgenInfo || !Component.__docgenInfo.props) {
    return Object.keys(Component.propTypes);
  }

  return Object.keys(
    Component.propTypes
  ).reduce((undocumentedProps, propName) => {
    let description;
    try {
      description = Component.__docgenInfo.props[propName].description;
    } catch (TypeError) {
      return undocumentedProps.concat(propName);
    }
    if (description && description.length > 0) {
      return undocumentedProps;
    }
    return undocumentedProps.concat(propName);
  }, []);
}

function checkComponent(Component) {
  const propTypes = Component.propTypes;

  if (propTypes === undefined) {
    return { propTypes: undefined };
  }

  return {
    propTypes,
    undocumentedProps: checkDocgenInfo(Component)
  };
}

expect.extend({
  toHavePropTypesAndDocGenInfo: Component => {
    const { propTypes, undocumentedProps } = checkComponent(Component);

    if (propTypes === undefined) {
      return {
        pass: false,
        message: () =>
          `Expected ${Component.name} to have propTypes, but it did not.`
      };
    } else if (undocumentedProps.length > 0) {
      return {
        pass: false,
        message: () => `
Expected component to have documented all propTypes, but it did not.
${undocumentedProps
          .map(propName => `docgenInfo is missing for "${propName}".`)
          .join("\n")}`
      };
    }
    return {
      pass: true,
      message: () => "Component implements and documents propTypes as expected."
    };
  }
});
