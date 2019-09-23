function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    str = str.substr(0,num) + "...";
  };
  console.log(str);
  return str; 
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);