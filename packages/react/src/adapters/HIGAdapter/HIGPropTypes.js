function higInstance(props, propName, componentName = "ANONYMOUS") {
  if (props[propName]) {
    const value = props[propName];
    if (!value || value._interface === undefined) {
      return new Error(
        `${propName} in ${componentName} is not an instance of a vanilla HIG component`
      );
    }
  }

  // assume all ok
  return null;
}

export default {
  higInstance
};
