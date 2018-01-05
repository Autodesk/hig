const AvailableThemes = ['light', 'dark-blue'];

function themeClassFor(theme) {
  return `hig--${theme}-theme`;
}

const themeClasses = AvailableThemes.map(themeClassFor);

function checkTheme(theme) {
  if (!AvailableThemes.includes(theme)) {
    console.error(
      `Theme "${theme}" not found, only these themes are allowed: `,
      AvailableThemes
    );
  }
}

export default {
  AvailableThemes,
  themeClasses,
  themeClassFor,
  checkTheme
};
