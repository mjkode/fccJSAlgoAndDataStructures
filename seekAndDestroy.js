function destroyer(arr) {
  // Remove all the values
  for (var i = 1; i < arguments.length; i++){
    for (var j = 0; j < arguments[0].length; j++){
      if(arguments[0][j]===arguments[i]){
        arguments[0].splice(j,1);
        j--;
      };
    };    
  };
  return arr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5)