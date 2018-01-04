const AvailableThemes = ['light', 'dark-blue'];

const themeClasses = ['hig--light-theme', 'hig--dark-blue-theme'];

function themeClassFor(theme) {
  return `hig--${theme}-theme`;
}

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
