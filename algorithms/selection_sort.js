var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
  var minIndex = startIndex;
  var minValue = array[startIndex];

  for (var i = startIndex + 1; i < array.length; i++) {
      if (array[i] < minValue) {
          minIndex = i;
          minValue = array[i];
      }
  }
  return minIndex;
};

var selectionSort = function(array) {
  for (var i = 0; i < array.length; i++) {
      var indexOfMin = indexOfMinimum(array, i);
      swap(array, i, indexOfMin);
  }
  return array;
};

var array = [22, 11, 99, 88, 9, 7, 42];
console.log(selectionSort(array));
