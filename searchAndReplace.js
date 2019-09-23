function myReplace(str, before, after) {
  
//split the str
  var strSplit = str.split(" ");
  //console.log(strSplit, strSplit.length)

//check for matches
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i] == before){
      if(strSplit[i][0] === strSplit[i][0].toUpperCase()){
        after = after[0].toUpperCase()+after.slice(1);
        console.log("a ",after);
      }
      strSplit[i] = after;
    } 
  }
  
  var str = strSplit.join(" ");
  return str;
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")