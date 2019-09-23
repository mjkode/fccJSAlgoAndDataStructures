function chunkArrayInGroups(arr, size) {
  // Break it up.
  let arrChunk = [];
  console.log(arr, size);
  if(size > arr.length){
    arrChunk = arr;
  } else{
    for(let i = 0; i < arr.length; i+=size){
      console.log("*",arr.slice(i,i+size))
      arrChunk.push(arr.slice(i,i+size));
      console.log(arrChunk);
    };
  };  
  return arrChunk;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);