function evenOccurrence (arr) {
  // Write your code here, and
  // return your final answer.
  var counter = 0;
  for(var i = 0; i < arr.length; i++) {
    var currentValue = arr[i];
    for(var j = 0; j < arr.length; j++) {
      if(currentValue === arr[j]) {
        counter++;
      }
    }
    
    if(counter % 2 === 0) {
        return currentValue;
    } else {
      counter = 0;
    }
   
  }
  
   return null;
}