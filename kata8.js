function multiplicationTable(maxValue){
  var numString = '';
  for(var y = 1; y <= maxValue; y++){
    for(var x = 1; x <= maxValue; x++){
      numString += x*y + ' ';
    }
    numString += '\n';
  }
  return (numString);
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));