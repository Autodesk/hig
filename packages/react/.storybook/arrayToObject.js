export default function arrayToObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i) rv[arr[i]] = arr[i];
  return rv;
}
