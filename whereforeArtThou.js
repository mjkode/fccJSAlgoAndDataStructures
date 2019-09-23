function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

 var collKeys = Object.keys(collection);
 var collKeyNums = collKeys.length;
 var srcKeys = Object.keys(source);
 var srcKeyNums = srcKeys.length;

  arr = collection.filter(function (obj){ 
    for(var i=0; i < srcKeyNums; i++){
      if(!obj.hasOwnProperty(srcKeys[i])){
        return false;
        } if(obj[srcKeys[i]] !== source[srcKeys[i]]){
          return false;
          }
    } return true;
  })
  for(var x=0; x<arr.length; x++){
    console.log(Object.entries(arr[0]));}
  // Only change code above this line
  
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })//should return [{ "apple": 1, "bat": 2, "cookie": 2 }];