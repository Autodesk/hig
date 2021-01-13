import { Children } from "react";

export default function createChildren(children, HIGComponent) {
  return Children.toArray(children).reduce((result, child, index) => {
    const { type, key, props = { index } } = child;

    if (type === HIGComponent) {
      result.push({ key, props });
    }

    return result;
  }, []);
}
