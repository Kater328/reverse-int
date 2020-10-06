module.exports = function reverse (n) {
  let str = n.toString();
  let result = '';
  if (str[0] === '-') str = str.substring(1);
  for (let i = str.length - 1; i >= 0; i--)
      result = result + str[i];
  return result;
}
