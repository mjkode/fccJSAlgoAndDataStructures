function truthCheck(collection, pre) {
  // Is everyone being true?
  
  const arrLen = collection.length; //how many objects in array
  var isTruthy = true; //is it true

  for (var i=0; i<arrLen; i++){ //iterate over objects in array
    var isPre = collection[i].hasOwnProperty(pre); //does object contain given property?  
    var isVal = Boolean(collection[i][pre]); //does given property have a value?
    console.log(1,isPre, isVal);  
    if (isPre && isVal){ //current object has both
      isTruthy = true; //truthy is true, check next object
    }else{ //current object does not have both
      isTruthy = false; //truth is false
      break; //no need to go on
    } 
  }    
   
  pre = isTruthy;
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");