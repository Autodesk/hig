function frToPercentage(width) {
  if (width.match(/.+fr$/)) {
    const value = width.split('fr');
    const percentWidth = Math.round(value[0] * 100);
    return `${percentWidth}%`;
  }
  return width;
}

export default frToPercentage;
