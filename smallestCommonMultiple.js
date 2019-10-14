function smallestCommons(arr) {
  var orderedArr = minMax(arr);
  var filledArr = fillArr(orderedArr);
  var nums = filledArr.length;
  var lcm = filledArr[nums-1];
  
  for(var i=nums-1; i>=0; --i){lcm = lcmPair(filledArr[i], lcm);} 

  function minMax(arrMM){var x=arrMM[0]; var y=arrMM[1];
    if(x<y){return [x,y]}else{return [y,x]}
  }

  function fillArr(arr){var max = arr.pop();
    for(var i=arr[0]+1; i<=max; i++){arr.push(i);}return(arr);
  }

  function lcmPair(x,y){
    for(var i=1; i<=y; i++){if(((y*i)%x)===0){return (y*i)}} 
  }
  
  arr=lcm;
  return arr; 
}

smallestCommons([1,13]);