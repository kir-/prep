function calculateChange(total, cash){
  var change = {};
  var changeRemaining = cash - total;
  if (changeRemaining>=2000){
    change['twentyDollar'] = (changeRemaining - changeRemaining%2000)/2000;
    changeRemaining = changeRemaining%2000;
  }
  if (changeRemaining>=1000){
    change['tenDollar'] = (changeRemaining - changeRemaining%1000)/1000;
    changeRemaining = changeRemaining%1000;
  }
  if (changeRemaining>=500){
    change['fiveDollar'] = (changeRemaining - changeRemaining%500)/500;
    changeRemaining = changeRemaining%500;
  }
  if (changeRemaining>=200){
    change['twoDollar'] = (changeRemaining - changeRemaining%200)/200;
    changeRemaining = changeRemaining%200;
  }
  if (changeRemaining>=100){
    change['oneDollar'] = (changeRemaining - changeRemaining%100)/100;
    changeRemaining = changeRemaining%100;
  }
  if (changeRemaining>=25){
    change['quater'] = (changeRemaining - changeRemaining%25)/25;
    changeRemaining = changeRemaining%25;
  }
  if (changeRemaining>=10){
    change['dime'] = (changeRemaining - changeRemaining%10)/10;
    changeRemaining = changeRemaining%10;
  }
  if (changeRemaining>=5){
    change['nickel'] = (changeRemaining - changeRemaining%5)/5;
    changeRemaining = changeRemaining%5;
  }
  if(changeRemaining>=1){
    change['penny'] = (changeRemaining - changeRemaining%1)/1;
    changeRemaining = changeRemaining%1;
  }
  return(change);
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));