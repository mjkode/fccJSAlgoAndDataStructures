function diffArray(arr1, arr2) {
  var newArr = []; var newArrLen;
  var tempArr = []; var tempArrLen;
  var arr1Len = arr1.length; var arr2Len = arr2.length;
  
  tempArr = arr1.concat(arr2); tempArrLen = tempArr.length;
  
  for(var n = 0; n < tempArrLen; n++){
    var inArr1 = arr1.includes(tempArr[n]);
    var inArr2 = arr2.includes(tempArr[n]);
    var inBoth = inArr1 && inArr2;
    if(!(inBoth)){newArr.push(tempArr[n])};
    console.log("new  ", newArr);  
  };
  // Same, same; but different.
  
  return newArr;
}

diffArray([9, 2, 3, 5], [1, 2, 8, 4, 5]);