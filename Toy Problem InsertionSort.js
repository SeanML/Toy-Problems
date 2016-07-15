function insertionSort (array) {
  // Write your code here, and
  // return your final answer.
  var newArray = [];
  newArray.length = array.length;
  for(var i = 0; i < array.length; i++) {
    for(var j = array.length - 1; j > 0; j--) {
      if(array[i] < array[j]) {
        newArray[j - 1] = array[i].slice();
      } else {
        newArray[j + 1] = array[i].slice();
      }
    }
  }
  return newArray;  
}


// Look at items in the current array
// Insert them into new array based on value relative to rest of the array