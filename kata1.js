function sumLargestNumbers(data){
  var num = data[0];
  data.forEach(function compare(element){
    num = (num<element) ? element : num;
  });
  return(num);
};
var array1 = [1,2,3,2,1];
console.log(sumLargestNumbers(array1));