var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(ordered_list, target) {
  var min = 0;
  var max = primes.length - 1;
  var guess;
  while (primes[guess] !== target) {
    guess = Math.floor((min + max) / 2);
    if (min > max) {
      console.log(target + ' not in ordered list');
      return -1;
    } else if (primes[guess] < target) {
      min = guess + 1;
      console.log('Guess of ' + primes[guess] + ' was too low!');
    } else if (primes[guess] > target) {
      max = guess - 1;
      console.log('Guess of ' + primes[guess] + ' was too high!');
    }
  }
  console.log('Found ' + primes[guess] + ' at index ' + guess);
  return guess;
}

binarySearch(primes, 67);
console.log('--------------')
binarySearch(primes, 0);
console.log('--------------')
binarySearch(primes, 100);
console.log('--------------')
binarySearch(primes, 50);
console.log('--------------')
binarySearch(primes, 2);
