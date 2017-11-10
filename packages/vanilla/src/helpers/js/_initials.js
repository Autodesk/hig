function initials(phrase) {
  return phrase
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
}

export default initials;
