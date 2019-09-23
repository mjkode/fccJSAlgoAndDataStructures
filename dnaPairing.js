function pairElement(str) {
  
  var strCopy = str.substr(0);
  var strLen = strCopy.length;
  var arrNew = strCopy.split("");
  var arrLen = arrNew.length;
  var arrPair = [];
  
  for(var i=0; i<strLen; i++){
    switch (arrNew[i]){
      case "A": arrPair.push(["A", "T"]); break;
      case "C": arrPair.push(["C", "G"]); break;  
      case "G": arrPair.push(["G", "C"]); break;
      case "T": arrPair.push(["T", "A"]); break;    
    }
  }
  
  console.log(arrPair);  
  str = arrPair;
  return str;
}

pairElement("GCAGT");