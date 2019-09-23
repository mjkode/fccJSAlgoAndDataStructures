function mutation(arr) {
  let str0 = arr[0].toUpperCase();
  let str1 = arr[1].toUpperCase();
  let answer = true;
  for(let i=0; i < arr[1].length; i++){
    if(!str0.includes(str1[i])){
      answer = false; 
      console.log(i, arr[1][i],answer);
    };
  };
  return answer;
}

mutation(["hello", "Hello"])