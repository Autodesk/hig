function isPresent(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function resolvedRolesProxy(roles, theme) {
  if (typeof roles !== "object") return roles;

  return new Proxy(roles, {
    get: (obj, prop) => {
      if (!isPresent(obj, prop)) {
        /* eslint-disable-next-line no-console */
        console.error(`Role ${prop.toString()} does not exist`);
        return obj[prop];
      }

      const hasRoleDeprecationInfo =
        isPresent(theme, "metadata") &&
        isPresent(theme.metadata, "__deprecated__") &&
        isPresent(theme.metadata.__deprecated__, prop);

      if (hasRoleDeprecationInfo) {
        const roleDeprecationInfo = theme.metadata.__deprecated__[prop];

        const equivalencyInfo = roleDeprecationInfo.equivalent
          ? ` and has been renamed to ${roleDeprecationInfo.equivalent.toString()}.`
          : ".";

        /* eslint-disable-next-line no-console */
        console.warn(`Role ${prop.toString()} is deprecated${equivalencyInfo}`);
      }

      return obj[prop];
    }
  });
}

function createThemeProxy(theme) {
  return new Proxy(theme, {
    get: (obj, prop) => {
      const value = obj[prop];

      if (prop.toString() === "resolvedRoles")
        return resolvedRolesProxy(value, theme);

      if (!isPresent(obj, prop)) {
        /* eslint-disable-next-line no-console */
        console.error(`Property ${prop.toString()} does not exist.`);
        return value;
      }

      if (typeof value === "object" && value !== null)
        return createThemeProxy(value);

      return value;
    }
  });
}

export default createThemeProxy;
