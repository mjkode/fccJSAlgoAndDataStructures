function findElement(arr, func) {
  let num = 0;
  var i = 0;
  for (i = 0; i < arr.length; i++){
    console.log(arr.length, i, arr[i], func(arr[i]))
    if (func(arr[i])) {
      num = arr[i];
      return num;
      //break;
    };
  };    
  console.log(num);
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);