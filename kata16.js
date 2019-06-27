function blocksAway(directions){
  var xposition = 0;
  var yposition = 0;
  var location = {};
  var position;
  directions.forEach(function calculate(element, index){
    if(!(Number.isInteger(element))){
      if(element === 'right'){
        if(typeof position === 'undefined'){
          position = 1;
        }
        else if(position === 3){
          position = 0;
        }
        else{
          position += 1;
        }
      }
      else if(element === 'left'){
        if(typeof position === 'undefined'){
          position = 0;
        }
        else if(position === 0){
          position = 3;
        }
        else{
          position -= 1;
        }
      }
    }
    else{ //position [ 0 : up, 1 : right, 2 : down, 3 : left]
      if(position === 0){
        yposition += element;
        //console.log("up");
      }
      else if(position === 1){
        xposition += element;
        //console.log("right");
      }
      else if(position === 2){
        yposition -= element;
        //console.log("down");
      }
      else if(position === 3){
        xposition -= element;
        //console.log("left");
      }
    }
    //console.log(xposition + " and "+ yposition)
  });
  location['east'] = xposition;
  location['north'] = yposition;
  return(location);
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));