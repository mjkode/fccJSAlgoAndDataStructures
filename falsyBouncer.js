function bouncer(arr) {
  // Don't show a false ID to this bouncer.
    
  for(let i = 0; i < arr.length; i++){
    if(Boolean(arr[i])){
      } else {
        arr.splice(i,1);
        i=i-1; //arr[i+1] now at arr[i]
      };
    };  

  return arr;
}

bouncer([7, "ate", "", false, 9]);

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.