import camelcase from "camelcase";
import extendTheme from "../utils/extendTheme";
import resolveRoles from "../utils/resolveTheme";

function buildName(colorScheme, density) {
  return [
    colorScheme.metadata.colorSchemeName,
    density.metadata.densityName
  ].join(", ");
}

function buildFileName(colorScheme, density) {
  return camelcase([
    colorScheme.metadata.colorSchemeName,
    density.metadata.densityName,
    "Theme"
  ]);
}

function buildId(colorScheme, density) {
  return [colorScheme.metadata.colorSchemeId, density.metadata.densityId].join(
    "-"
  );
}

function buildTheme(colorScheme, density) {
  const unresolvedRoles = extendTheme(
    colorScheme.unresolvedRoles,
    density.unresolvedRoles
  );
  const metadata = { ...colorScheme.metadata, ...density.metadata };
  const resolvedRoles = resolveRoles(unresolvedRoles);

  return {
    metadata: {
      ...metadata,
      name: buildName(colorScheme, density),
      fileName: buildFileName(colorScheme, density),
      id: buildId(colorScheme, density)
    },
    unresolvedRoles,
    resolvedRoles
  };
}

export default function generateAllThemes(colorSchemes, densities) {
  const themes = [];

  colorSchemes.forEach(colorScheme => {
    densities.forEach(density => {
      themes.push(buildTheme(colorScheme, density));
    });
  });
  return themes;
}
