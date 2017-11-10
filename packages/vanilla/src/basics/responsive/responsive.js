import breakpoints from './responsive.scss';

const mappedBreakpoints = Object.entries(breakpoints).reduce((acc, [key, value]) => (
  Object.assign({}, acc, { [key]: parseInt(value, 10) })
), {});

export default mappedBreakpoints;
