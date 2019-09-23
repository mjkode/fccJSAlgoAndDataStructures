// the global Array
var s = [23, 65, 98, 5];

//callback is inner function passed into outer function as argument, callback then executes inside the outer function
Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  //use 'this' because the array name ('s' in this case) will not be known to the myMap method.
  for(let i = 0; i < this.length; i++){
    if(callback(this[i]) === true){
      newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.