function reverseString(str) {
  var strL = str.length;
  console.log(str,strL);
  
  var i = 0;
  console.log(i, str);
    for (i = 1; i <= strL; i++){
      //strL = str.charAt(i);
      //strR = strR + strL;
      
      str = str.charAt(strL - 1) + str;
      str = str.slice(0, str.length - 1);
      console.log(i, str);
  } 
  str;
  return str;
}
reverseString("hello");