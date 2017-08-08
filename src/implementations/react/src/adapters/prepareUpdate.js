

export default function prepareUpdate(oldProps, newProps) {
  // example
  // const oldProps = { label: 'foo' }
  // const newProps = { label: 'bar', onClick: 'foo' };

  const updatePayload = [];
  const mergedProps = {};

  // Fill out the initial props
  for (const propKey in oldProps) {
    mergedProps[propKey] = [oldProps[propKey], null];
  }

  // example
  // mergedProps =  { label: ['foo', null] }

  // Now overwrite the changes
  for (const propKey in newProps) {
    // When prop exists overwrite the value
    if (mergedProps[propKey] !== undefined) {
      mergedProps[propKey][1] = newProps[propKey];
    } else {
      mergedProps[propKey] = [null, newProps[propKey]];
    }
  }

  // example
  // mergedProps = { label: ['foo', 'bar'], onClick: [null, 'foo']}

  // Compare differences
  for (const propKey in mergedProps) {
    const [oldVal, newVal] = mergedProps[propKey];

    if (oldVal !== newVal) {
      updatePayload.push(propKey, newVal);
    }
  }

  // example
  // updatePayload = ['label', 'bar', 'onClick', 'foo']

  if (updatePayload.length === 0) {
    return null;
  } else {
    return updatePayload;
  }
}
