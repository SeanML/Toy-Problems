function arrayception(array, depth) {
  depth = depth || 1;

  let depths = array.map((index)=> {
    if(index.isArray) {
      return arrayception(index, depth + 1);
    } else {
      return depth;
    }
  });

  return Math.max(...depths);
}