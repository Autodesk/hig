const Core = require('./_core');

function ensureInterfaceIsDefined(instance) {
  // CHECK INTERFACE COMPATIBILITY
  if (!instance._interface) {
    console.warn(
      'NO INTERFACE SET FOR CLASS, PLEASE DEFINE INTERFACE IN _interface PROPERTY OF YOUR CLASS'
    );
  }
}

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
  const coreMethods = Object.getOwnPropertyNames(Core.prototype);
  // CHECK IF ALL METHODS IN COMPONENT ARE DEFINED IN INTERFACE
  instanceMethodNames.forEach((instanceMethodName) => {
    const coreMethodMissing = !coreMethods.includes(instanceMethodName);
    if (
      coreMethodMissing && instanceMethodName[0] !== '_' && !instance._interface.methods[instanceMethodName]
    ) {
      console.error(
        `METHOD: "${
          instance.constructor.name
        }.${
          instanceMethodName
        }" IS NOT DEFINED AS INTERFACE OR IS NOT A VALID INTERFACE METHOD`
      );
    }
  }, instance);
}

function ensureAllInterfaceMethodsAreImplemented(instance, instanceMethodNames) {
  // CHECK IF ALL METHODS IN INTERFACE ARE IMPLEMENTED
  Object.keys(instance._interface.methods).forEach((interfaceMethodName) => {
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
  const instanceMethodNames = Object.getOwnPropertyNames(
    Object.getPrototypeOf(instance)
  );

  ensureInterfaceIsDefined(instance);
  ensureDefaultsAreDefined(instance);

  ensureImplementedMethodsAreDefinedInInterface(instance, instanceMethodNames);
  ensureAllInterfaceMethodsAreImplemented(instance, instanceMethodNames);
  ensureAllOptionKeysAreDefinedInInterface(instance);
}

module.exports = validateInterface;
