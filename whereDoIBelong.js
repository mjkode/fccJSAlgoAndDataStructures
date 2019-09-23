function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var arr1 = arr;
  var arr2 = [];
  var answer = 0;
  //console.log(arr1,"  -  ",arr2);
  
  function smallest(arrSm){
    let small = arrSm[0];
    let smallI = 0;
    for(let i=0; i<arrSm.length; i++){
      if(arrSm[i]<small){
        small=arrSm[i];
        smallI=i;
      };
    };  
    return smallI;
  };
  
  function sort(arrUnSort, arrSort){
    let arrUnSortLen = arrUnSort.length;
    for(let i=0; i < arrUnSortLen; i++){
      arrSort.push(arrUnSort.splice(smallest(arrUnSort),1));
    };
    return arrSort;
  };
    
  function insert(arrUnSort, aarSort, num){ 
    let inserted = 0;
    let arrSorted = sort(arr1, arr2);
    console.log("*",arrSorted);
    for(let i=0; i <= arrSorted.length; i++){
      console.log(i,"   ",arrSorted[i], " ",num);
      if (num <= arrSorted[i]){
        inserted = i;
        break;
      } else {
        inserted = i; 
      };
    };  
  return inserted;
  };

  answer = insert(arr1, arr2, num); 
  console.log(answer);
  return answer;
}

getIndexToIns([10, 20, 30, 40, 50], 30);