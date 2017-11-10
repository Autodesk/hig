import Hig from "hig-vanilla";

function higInstance(props, propName, componentName = "ANONYMOUS") {
  if (process.env.NODE_ENV === "test") {
    return null;
  }

  if (props[propName]) {
    const value = props[propName];
    if (!value || !(value instanceof Hig.Core)) {
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
