function capitalizeCamelCase(string) {
  return string.split('-').reduce((acc, section) => {
    return acc + section.charAt(0).toUpperCase() + section.slice(1)
  }, '');
}

module.exports = capitalizeCamelCase;