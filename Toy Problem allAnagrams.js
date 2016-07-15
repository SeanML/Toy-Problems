function allAnagrams(string) {
  var strArr = string.split("");
  var anagrams = {};

  if (string.length <= 1) {
    return strArr;
  }

  function permute(str, sliced) {
    if (str.length === strArr.length) {
      anagrams[str] = str;
      return;
    }

    for (var i = 0; i < sliced.length; i++) {
      var temp = sliced[i];
      var copy = sliced.slice();
      copy.splice(i, 1);
      permute(str + temp, copy);
    }
  }
  permute("", strArr);
  return Object.keys(anagrams);
}

allAnagrams("test");