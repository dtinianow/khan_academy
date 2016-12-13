var isEven = function (n) {
  return n % 2 === 0;
};

var isOdd = function (n) {
  return !isEven(n);
};

var power = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return (1 / power(x, -n));
  }
  if (isOdd(n)) {
    return x * power(x, n - 1);
  }
  if (isEven(n)) {
    var evenPower = power(x, n / 2);
    return evenPower * evenPower;
  }
};
