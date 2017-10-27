function frToPercentage(width) {
  if (width.match(/.+fr$/)) {
      var value = width.split('fr')
      var percentWidth = Math.round(value[0] * 100);
      return  `${percentWidth}%`;
  } else {
      return width ;
  }
}

module.exports = frToPercentage;
