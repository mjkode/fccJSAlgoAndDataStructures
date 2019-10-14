/*function addTogether() {
      // Function to check if a number is actually a number
      // and return undefined otherwise.
      var isNum = function(num) {
        if (typeof num !== 'number') {
          return undefined;
        } else
          return num;
      };

      // Check if we have two parameters, check if they are numbers
      // handle the case where one is not
      // returns the addition.
      if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
          return undefined;
        } else {
          return a + b;
        }
      } else {
        // If only one parameter was found, returns a new function that expects two
        // Store first argument before entering the new function scope
        var c = arguments[0];

        // Check the number again, must be outside the function to about returning an object
        // instead of undefined.
        if (checkNum(c)) {
          // Return function that expect a second argument.
          return function(arg2) {
            // Check for non-numbers
            if (c === undefined || checkNum(arg2) === undefined) {
              return undefined;
            } else {
              // if numbers then add them.
              return c + arg2;
            }
          };
        }
      }
    }


    // test here
    addTogether(2,3);
    addTogether(2)(3);
    addTogether("http://bit.ly/IqT6zt");
    addTogether(2, "3");
    addTogether(2)([3]);


    */


function addTogether() {
// only numbers are valid arguments    
    var isValid = function (arg) {
        return typeof arg === "number" ? arg : undefined
    };
    var arg0 = isValid(arguments[0]);
    var arg1 = isValid(arguments[1]);

//are there two inital arguments?  
    if (arguments.length === 2) {
//......yes, are the two inital arguments valid?
        return arg0 && arg1 ? 
//..........yes,        
            arg0 + arg1 : 
//..........no,
            undefined;
//......no,
        } else {
//..........was the first inital argument valid? 
            if (arg0) {
//..............yes, return a new function to check for the next argument
                return function (argNew) {
//..................is the new arguemnt valid?
                    return arg0 && isValid(argNew) ? 
//......................yes,                    
                        arg0 + argNew :
//......................no,                        
                        undefined;
                };
            }
        }
}

addTogether(2, 3);