function largestOfFour(arr) {

var arr0 = []; var arr1 =[]; var arrLargest =[];
var arr0Len = 0; var arr1Len = 0; 
var loop0 = 0; var loop1 = 0;
var wordLargest = 0;

arr0 = arr; 
arr0Len = arr0.length;
arr1 = arr0[loop0];
arr1Len = arr1.length;

for(loop0=0; loop0<arr0Len; loop0++){
  arr1 = arr0[loop0];
  wordLargest = arr1[0];
  for(loop1=0; loop1<arr1Len; loop1++){
    if(arr1[loop1] > wordLargest){
      wordLargest = arr1[loop1]; 
    };
  };
  
  arrLargest.push(wordLargest);
  console.log("---",arrLargest); 
};

  console.log("---",arrLargest);

  arr=arrLargest;
  return arr;

}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])