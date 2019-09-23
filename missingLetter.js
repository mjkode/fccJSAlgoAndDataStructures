function fearNotLetter(str) {
  var testStr = "abcdefghijklmnopqrstuvwxyz";
  
  function findStart(key, test){
    for(var i=0; i < key.length; i++){
      if(key[i] == test[0]){
        return i; }}}

  function findMissing(key, test){
    var start = findStart(key, test);
    for(var j=0; j < str.length; j++){
      if(testStr[start+j] !== str[j]){
        return testStr[start+j]; }}}

  str = findMissing(testStr,str);
  return str;
}

fearNotLetter("abce"); 
fearNotLetter("abcdefghjklmno");        