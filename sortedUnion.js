function uniteUnique(arr1, arr2, arr3) {

  var spreadArr = [...arguments];
console.log(spreadArr," - ", spreadArr.length);
  var flatArr = spreadArr.flat();
console.log(flatArr," - ", flatArr.length);
  for(var i=0; i<flatArr.length-1;i++){
    for(var j=i+1; j<flatArr.length;j++){
      console.log(flatArr[i],flatArr[j])
      if(flatArr[j] === flatArr[i]){
        flatArr.splice(j,1);
        console.log(flatArr);
        i--;
        break;
      }
    }
  }
 
  var arr = flatArr;
  console.log(arr);
  return arr;
}
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);