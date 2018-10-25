export default function createThemeProxy(theme) {
  return new Proxy(theme, {
    get: (obj, propertyName) => {
      const value = obj[propertyName];
      const isValidProperty = Object.prototype.hasOwnProperty.call(
        obj,
        propertyName
      );

      if (!isValidProperty) {
        /* eslint-disable-next-line no-console */
        console.error(`Role ${propertyName} does not exist`);
        return null;
      }

      if (typeof value === "object" && value !== null) {
        return createThemeProxy(value);
      }

      return value;
    }
  });
}
