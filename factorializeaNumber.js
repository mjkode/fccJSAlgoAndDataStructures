function factorialize(num) {
  var fact = 1;
  var i = 0;
  for (i = 1; i<=num; i++) {
    fact = fact * i;
    console.log(num, i, fact);
  }
  num = fact;
  return num;
}

factorialize(5);