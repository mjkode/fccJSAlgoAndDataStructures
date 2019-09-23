function reverseString(str) {
  var strL = str.length;
  console.log(str, strL);
  
  var i = 0;
    for (i = 0; i <= strL - 2; i++){
      str = str.slice(0,i) + str.charAt(str.length - 1) + str.slice(i,str.length - 1)
      console.log(i, str);
  } 
  str;
  return str;
}
reverseString("hello");