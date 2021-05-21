import { Children } from "react";
import TreeItem from "../TreeItem";

export default function createChildren(children) {
  // return Children.toArray(children).reduce((result, child, index) => {
  // const { type, key, props = { index } } = child;
// console.log(typeof child);
    /* if (type === TreeItem) {
      result.push({ key, props });
    } */
    /* if (typeof child === 'string') {
      result.push(child);
    } */
    result.push(child);

// console.log(result);
    //return result;
    console.log('createChildren');
    /* console.log(type);
    console.log(key);
    console.log(props); */
    return result;
  }, []);
}
