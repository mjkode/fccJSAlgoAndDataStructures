function dropElements(arr, func) {
  var conMet = false;
  var arrNew = [];
  for(var i = 0; i<arr.length; i++){
    if(conMet || func(arr[i])){conMet = true; arrNew.push(arr[i]);}
  }  
  
  arr = arrNew;

  return arr; 
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });