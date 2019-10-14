function sumFibs(num) {
//vars
  var newNum = num; //copy 'num'
  var fibsArr = getFibs(newNum);
  var fibSum = 0;
//sum the odd fib nums
  for(var j = 0; j < fibsArr.length; j++){
    if(isOdd(fibsArr[j])){
      fibSum = fibSum + fibsArr[j];
    }
  }
//build array of fib numbers  
  function getFibs(numMax){
    var fibArr = [1,1];
    for(var i=2; fibArr[i-1] + fibArr[i-2] <= numMax; i++){
      fibArr[i] = fibArr[i-1] + fibArr[i-2];
    } return fibArr;
  }
//is it an odd number  
  function isOdd(numOdd){
    return numOdd % 2 != 0;
  };

  num = fibSum;
  return num;
}

sumFibs(4);