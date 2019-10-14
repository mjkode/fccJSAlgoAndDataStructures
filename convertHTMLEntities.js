function orbitalPeriod(arr) {
  
// GM (standard gravitational parameter) = gravitational constant (G) * mass (M).
  var earthGM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];

// function to compute orbital period based on key value pairs (satellite, altitude)  
  var getOrbitalPeriod = function(obj) {
// T (orbital period) = 2 * Pi * square-root(earthRadius + average altitude) / earthGM
    var T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / earthGM));
// delete avgAlt property and add orbitalPeriod property   
    delete obj.avgAlt;
    obj.orbitalPeriod = T;
    console.log(T,"secs - ",T/60,"mins - ",T/60/60,"hours - ",T/60/60/24,"days")
    return obj; 
  };
 
 //kvp = Key Value Pair
  for (var kvp in arr) {
    newArr.push(getOrbitalPeriod(arr[kvp]));
  }
return newArr; 

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);