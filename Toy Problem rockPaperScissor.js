function rockPaperScissor(roundCount) {
  var results = [];
  var rps = "rps";

  function permute(pstr) {
    if(pstr.length === roundCount) {
      results.push(pstr);
      return;
    }
    for(var i = 0; i < rps.length; i++) {
      permute(pstr + rps[i]);
    }
  }
  permute("");
  return result;
};
