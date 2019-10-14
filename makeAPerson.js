var Person = function(firstAndLast) {
  var fn = firstAndLast;
  this.getFirstName = function() {return fn.split(" ")[0];};
  this.getLastName = function() {return fn.split(" ")[1];};
  this.getFullName = function() {return fn;};
  this.setFirstName = function(name) {fn = name + " " + fn.split(" ")[1];};
  this.setLastName = function(name) {fn = fn.split(" ")[0] + " " + name;};
  this.setFullName = function(name) {fn = name;};
};

var bob = new Person('Bob Ross');
bob.getFullName();