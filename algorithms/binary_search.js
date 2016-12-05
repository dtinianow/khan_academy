var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(ordered_list, target) {
  var min = 0;
  var max = primes.length - 1;
  var guess_count = 0;
  var guess;
  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    guess_count++;
    if (ordered_list[guess] === target) {
      console.log('Found ' + ordered_list[guess] + ' at index ' + guess);
      console.log('Total guesses: ' + guess_count);
      return guess;
    } else if (ordered_list[guess] < target) {
      min = guess + 1;
      console.log('Guess of ' + ordered_list[guess] + ' was too low!');
    } else if (ordered_list[guess] > target) {
      max = guess - 1;
      console.log('Guess of ' + ordered_list[guess] + ' was too high!');
    }
  }
  console.log(target + ' not in ordered list');
  console.log('Total guesses: ' + guess_count);
  return -1;
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
