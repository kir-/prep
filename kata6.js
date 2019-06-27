function repeatNumbers(data){
  var stringFinal = ""; 
  data.forEach(function repeat(x){
    for(var y = 0; y < x[1]; y++){
      stringFinal += x[0];
    }
    stringFinal += ", ";
  });
  stringFinal = stringFinal.slice(0,stringFinal.length - 2);
  return (stringFinal);
}

console.log(repeatNumbers([[1, 2], [2, 3]]));

