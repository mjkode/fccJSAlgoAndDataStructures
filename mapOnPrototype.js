// the global Array
var s = [23, 65, 98, 5];

//callback is inner function passed into outer function as argument, callback then executes inside outer function
Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  //use 'this' because the array name ('s' in this case) will not be known to the myMap method.
  for(let i=0; i<this.length;i++){
    newArray.push(callback(this[i]));
    console.log(newArray);
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});