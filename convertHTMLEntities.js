function convertHTML(str) {

//copy str to newStr
  var newStr = str.substr(0);

//create HTML Key-Value Pair
  var htmlKVP={'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":"&apos;"}; 

//create array of Keys and Values 
  const keys = Object.keys(htmlKVP);
  const values = Object.values(htmlKVP);

//for each 'key', if 'key' exist in str, replace 'key' with it's 'value'   
  for(var i=0; i<keys.length; i++){
    newStr = newStr.split(keys[i]).join(values[i]); 
  }
  
//copy newStr to str     
  str = newStr;
    return str;
}
 
convertHTML("Dolce & Gabbana"); 
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("<>");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");