function conditionalSum(values,condition){
  var total = 0;
  switch(condition){
    case "even":
      values.forEach(function totalEven(num){
        if(num%2==0){
          total+=num;
        }
      });
      break;
    case "odd":
        values.forEach(function totalOdd(num){
          if(num%2==1){
            total+=num;
          }
        });
      break;
  }
  return (total);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));