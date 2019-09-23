function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  //add space before ever lowercase followed by uppcase  
  //"thisIsSpinalTap" becomes "this Is Spinal Tap"
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
console.log(1,str); 
  //change all to lowercase
  str = str.toLowerCase();
console.log(2,str);
  //change underscore and dash to space
  str = str.replace(/(-|_)/g, ' ');
console.log(3,str); 
  //change space to underscore
  str = str.replace(/\s/g,'-'); 
console.log(4,str);   
  return str;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");