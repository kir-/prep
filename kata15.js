function generateBoard(whiteQueen, blackQueen){
 var chessBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;
  return (chessBoard);
}

function queenThreat(chessBoard){
  var danger = false;
  var position1 = [];
  var position2 = [];
  var tempPostion;
  var flag = false;
  chessBoard.forEach(function divide(element,index){
    tempPosition = element.findIndex(findQueen);
    if(tempPosition !== -1){
      if(flag === false){
        position1.push(index);
        position1.push(tempPosition);
        flag = true;
      }
      else{
        position2.push(index);
        position2.push(tempPosition);
      }
    }
  });
  if(position1[0] === position2[0] || position1[1] === position2[1]){ // checks up and down
    danger = true;
    //console.log('up-down');
  }
  else if((position1[0] + position1[1]) === (position2[0] + position2[1])){//diagonal left
    danger = true;
    //console.log('diagonal left');
  }
  else if(Math.abs(position1[0] - position1[1]) === Math.abs(position2[0] - position2[1])){//diagonal right
    danger = true;
    //console.log('diagonal right');
  }
  return danger;
}

function findQueen(element){
  return (element === 1);
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));