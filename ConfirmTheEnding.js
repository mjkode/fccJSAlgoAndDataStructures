function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
   
  console.log(str.substring(str.length - target.length), target);
  console.log(str.substring(str.length - target.length) === target);
  return (str.substring(str.length - target.length) === target);
}

confirmEnding("Bastian", "i");