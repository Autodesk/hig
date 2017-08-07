/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

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
