function implementsInterface(fn, HIGComponent) {
  const interfaceMethods = Object.keys(HIGComponent._interface.methods);
  const mockInstance = interfaceMethods.reduce((acc, methodName) => {
    return {
      ...acc,
      [methodName]: jest.fn()
    }
  }, {
    mount: jest.fn(),
    unmount: jest.fn()
  });

  fn(mockInstance);

  const uncalledMethods = interfaceMethods.reduce((acc, methodName) => {
    return (mockInstance[methodName].mock.calls.length === 0)
      ? acc.concat([methodName])
      : acc;
  }, []);

  return {
    pass: uncalledMethods.length === 0,
    uncalledMethods,
    calledCount: interfaceMethods.length - uncalledMethods.length,
    totalMethods: interfaceMethods.length
  }
}

expect.extend({
  toImplementHIGInterfaceOf: (fn, HIGComponent) => {
    const { pass, uncalledMethods, calledCount, totalMethods } = implementsInterface(fn, HIGComponent)

    if (pass) {
      return { message: () => 'Expected adapter to excercise the hig interface. ${calledCount} of ${totalMethods} methods called.', pass: true }
    } else {
      return { message: () => `
Expected adapter to excercise the hig interface, but only ${calledCount} of ${totalMethods} methods called.
${uncalledMethods.map(methodName => `"${methodName}" was not called`).join('\n')}
      `, pass: false }
    }
  }
});
