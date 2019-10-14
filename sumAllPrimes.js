function sumPrimes(num) {
  
  var newNum = num;
  var primeSum =0;

  for(var j=2; j<=newNum; j++){
    if(isPrime(j)){
      primeSum = primeSum + j;
    }
  }
  console.log(j, primeSum);

  function isPrime(numPrime){
    for(var i = 2; i < numPrime; i++){
      if(numPrime%i === 0){
        return false;
      }
    } return true;
  }
  num = primeSum;
  return num;
}

sumPrimes(10);
sumPrimes(977);