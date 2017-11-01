export default function throwIfNoHIGMethod(props, methodName) {
  if (props.higInstance[methodName] === undefined) {
    throw new TypeError(`${props.displayName} has no method '${methodName}'`);
  }
}
