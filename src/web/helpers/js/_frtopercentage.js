function frToPercentage(width) {
  if (width.match(/.+fr$/)) {
      var value = width.split('fr', 1)
      var percentWidth = value[0] * 100;
      return  `${percentWidth}%`;
  } else {
      return width ;
  }
}

module.exports = frToPercentage;
