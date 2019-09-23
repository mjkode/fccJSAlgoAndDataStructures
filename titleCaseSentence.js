function titleCase(str) {
  var strLow; var strSplit; var strTitle="";
  strLow = str.toLowerCase();
  strSplit = strLow.split(" ");
  for (var i=0; i < strSplit.length; i++){
    var strU = strSplit[i].charAt(0).toUpperCase();
    var strL = strSplit[i].slice(1);
    strTitle = strTitle + strU + strL + " ";
  };
  str = strTitle.slice(0, -1);
//  str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  return str;
}

titleCase("I'm a little tea pot");