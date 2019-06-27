function camelCase(data){
  var newString = "";
  var flag = true;
  for(x of data){
    if (x === " "){
      flag = true;
    }
    else{
      if (flag === true){
        newString += x.toUpperCase();
        flag = false;
      }
      else{
        newString += x;
      }
    }
  }
  return (newString);
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));