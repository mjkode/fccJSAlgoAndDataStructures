function steamrollArray(arr) {
  // I'm a steamroller, baby
  console.log(arr);
  var newArr = arr.flat(Infinity);
  console.log(newArr);
  arr=newArr;
  return arr; 
}

steamrollArray([1, [2], [3, [[4]]]]);