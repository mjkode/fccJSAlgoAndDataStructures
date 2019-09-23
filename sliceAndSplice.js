function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  let newArr2 = arr2.slice();
  let arr1Len = arr1.length;
  let newArr2Len = newArr2.length;
  
  for (let i=0; i<arr1Len; i++){
    console.log(i," ",newArr2);
    newArr2.splice(n+i,0,arr1[i])
  };

  console.log(newArr2); 
  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5], 1);
//frankenSplice([1, 2, 3], ["a", "b"], 1);
//frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)