function findLongestWordLength(str) {
  var arrayOfStrings = str.split(/\s/); 
  var i = 0;
  var longestWord = 0;
  for (i = 0; i < arrayOfStrings.length; i++){
    if (arrayOfStrings[i].length > longestWord) {
      longestWord = arrayOfStrings[i].length;
    }
  }

  console.log(arrayOfStrings);
  console.log(str);
  console.log(str.length);
  console.log(longestWord);
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");