const breakpoints = require('./responsive.scss');

const mappedBreakpoints = Object.entries(breakpoints).reduce((acc, [key, value]) => (
  Object.assign({}, acc, { [key]: parseInt(value, 10) })
), {});

module.exports = mappedBreakpoints;
