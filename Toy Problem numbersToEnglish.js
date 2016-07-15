var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

function numberToEnglish (number) {
  var english = [];
  recurse(number);
  function recurse(remainingDigits) {
    var numLength = String(remainingDigits).length;
    var numString = String(remainingDigits);
    
    if(numLength === 0) {
      return english;
    }
    
    if(numLength === 1) {
      english.push(numbersToWords[remainingDigits]);
    }
    
    if(numLength === 2 && numString[0] === 0) {
      english.push(numbersToWords[Number(numString[1])]);
      return english;
    }
    
    if(remainingDigits <= 20) {
      english.push(numbersToWords[remainingDigits]);
    }
    
    if(remainingDigits > 20 && remainingDigits < 100) {
      english.push(numbersToWords[remainingDigits - numString[1]] + "-" + numbersToWords[numString[1]]);
      recurse(Number(numString.slice(1)));
    }
  
    if(remainingDigits >= 100 && remainingDigits < 999) {
      for(var key in numbersToPlace) {
        if(String(key).length === numString.length) {
          english.push(numbersToWords[numString[0]] + "-" + numbersToPlace[key]);
        recurse(Number(numString.slice(1))); 
        }
      }
    }
  }
  return english.join(" ");
}


