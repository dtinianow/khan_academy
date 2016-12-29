function swap(array, indexA, indexB) {
  var temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

function quickSort(array, left, right) {
  if (left < right) {
    var pivot = array[Math.floor((left + right) / 2)];
    var partitionIndex = partition(array, pivot, left, right);

    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  while (left <= right) {

    while (array[left] < pivot) { left++; }
    while (array[right] > pivot) { right--; }

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}
