function checkDocgenInfo(Component) {
  return Object.entries(Component.propTypes).reduce((undocumentedProps, [propName, propType]) => (
    undocumentedProps// (propType && propType.description) ? undocumentedProps : undocumentedProps.concat(propName)
  ), []);
}

function checkComponent(Component) {
  const propTypes = Component.propTypes;

  if (propTypes === undefined || Object.keys(propTypes).length === 0) {
    return { propTypes: undefined };
  }

  return {
    propTypes,
    undocumentedProps: checkDocgenInfo(Component)
  };
}

expect.extend({
  toHavePropTypesAndDocGenInfo: (Component) => {
    const { propTypes, undocumentedProps } = checkComponent(Component);

    if (propTypes === undefined) {
      return {
        pass: false,
        message: () => `Expected ${Component.name} to have propTypes, but it did not.`
      };
    } else if (undocumentedProps.length > 0) {
      return {
        pass: false,
        message: () => `
Expected component to have documented all propTypes, but it did not.
${undocumentedProps.map(propName => `docgenInfo is missing for "${propName}".`).join('\n')}
      `
      };
    }
    return {
      pass: true,
      message: () => 'Component implements and documents propTypes as expected.'
    };
  }
});
