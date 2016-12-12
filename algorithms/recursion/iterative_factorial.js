var factorial = function (n) {
  var result = 1;
  for (var i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};
