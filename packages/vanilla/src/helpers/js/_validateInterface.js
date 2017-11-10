function ensureDefaultsAreDefined(instance) {
  if (!instance._defaults) {
    console.warn(
      `NO DEFAULTS SET FOR ${
        instance.constructor.name
      }, PLEASE DEFINE DEFAULTS IN _defaults PROPERTY OF YOUR CLASS`
    );
  }
}

function ensureImplementedMethodsAreDefinedInInterface(instance, instanceMethodNames) {
  const coreMethods = Object.getOwnPropertyNames(
    Object.getPrototypeOf(Object.getPrototypeOf(instance))
  );
  instanceMethodNames.forEach((instanceMethodName) => {
    const coreMethodMissing = !coreMethods.includes(instanceMethodName);
    if (
      coreMethodMissing
        && instanceMethodName[0]
        !== '_'
        && !instance._interface.methods[instanceMethodName]
    ) {
      console.error(
        `METHOD: "${
          instance.constructor.name
        }.${
          instanceMethodName
        }" IS NOT DEFINED AS INTERFACE OR IS NOT A VALID INTERFACE METHOD`
      );
    }
  });
}

function ensureAllInterfaceMethodsAreImplemented(instance, instanceMethodNames) {
  const interfaceMethods = instance._interface.methods || {};
  Object.keys(interfaceMethods).forEach((interfaceMethodName) => {
    if (!instanceMethodNames.includes(interfaceMethodName)) {
      console.error(
        `METHOD: "${
          instance.constructor.name
        }.${
          interfaceMethodName
        }" IS DEFINED IN THE INTERFACE BUT NOT IMPLEMENTED`
      );
    }
  });
}

function ensureAllOptionKeysAreDefinedInInterface(instance) {
  Object.keys(instance._defaults).forEach((interfaceDefaultName) => {
    if (instance._defaults[interfaceDefaultName] === undefined) {
      console.error(
        `DEFAULT VALUE: "${
          instance.constructor.name
        }.${
          interfaceDefaultName
        }" IS DEFINED IN THE INTERFACE BUT NOT IMPLEMENTED`,
        instance
      );
    }
  });
}

function validateInterface(instance) {
  if (!instance._interface) { return; }

  const instanceMethodNames = Object.getOwnPropertyNames(
    Object.getPrototypeOf(instance)
  );

  ensureDefaultsAreDefined(instance);

  ensureImplementedMethodsAreDefinedInInterface(instance, instanceMethodNames);
  ensureAllInterfaceMethodsAreImplemented(instance, instanceMethodNames);
  ensureAllOptionKeysAreDefinedInInterface(instance);
}

module.exports = validateInterface;
