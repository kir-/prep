function squareCode(message){
  var array = [];
  var theSquare = 0;
  var bufferText = '';
  var count = 0;
  var string = "";
  message = message.replace(/ /g,'')
  theSquare = Math.ceil(Math.sqrt(message.length));
  for(var x = 0; x < message.length; x++){
    if(count !== theSquare){
      count ++;
      bufferText += message[x];
    }
    else{
      array.push(bufferText);
      count = 1;
      bufferText = message[x];
    }
  }
  if(bufferText !== ''){
    array.push(bufferText);
  }
  for(var y = 0; y < theSquare; y++){
    for(var z = 0; z < array.length; z++){
      if(typeof array[z][y] !== "undefined"){
       string += array[z][y];
      }
    }
    string += " ";
  }
  return (string);
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));