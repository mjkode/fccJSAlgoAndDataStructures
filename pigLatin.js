function translatePigLatin(str) {
  //strings
  var cons = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  var word = str.substr(0); //deep copy str to word
  var conCluster = ""; //all the consonants at the begining of word
  //info
  var wordLen = word.length;

  //add and deleat letters from word 
  
  

  if(isEmpty()){}
  else if(getConCluster(word).length > 0){
    word = word.substr(conCluster.length);
    console.log(word); 
    word = word + conCluster; 
    console.log(word);
    word = word + "ay";} 
  else {
    word = word + "way";
    console.log(word);}
    
  
  //is the string empty
  function isEmpty(){console.log("ERROR");return (wordLen === 0)}
  
  //get all consonants at begining of word
  function getConCluster(str){
    for(var n=0; n < word.length; n++){
      if(isCon(str[n])){
        conCluster = conCluster + str[n];
        console.log(conCluster); 
      } else {
        break;
      }
    } return conCluster;
  } 
  
  //is this letter a consonant?
  function isCon(str){
    console.log(str, cons.includes(str)) 
    return cons.includes(str);
  }
  console.log(word, str);
  str = word;
  return str;
}

translatePigLatin("");