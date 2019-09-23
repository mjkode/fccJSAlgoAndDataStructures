function repeatStringNumTimes(str, num) {
  // repeat after me
  var i;
  var strR = "";
  if(num > 0) {
    for (i=0; i<num; i++) {
      strR = strR + str;
    };
  };
  str = strR;
  console.log(str);
  return str;
}

repeatStringNumTimes("abc", 0);