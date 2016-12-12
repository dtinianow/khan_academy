var firstChar = function (str) {
  return str.slice(0, 1);
};

var lastChar = function (str) {
  return str.slice(-1);
};

var middleChars = function (str) {
  return str.slice(1, -1);
};

var isPalindrome = function (str) {
  if (str.length <= 1) {
    return true;
  }
  if (firstChar(str) !== lastChar(str)) {
    return false;
  }
  return isPalindrome(middleChars(str));
};
