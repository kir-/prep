function numberOfVowels(data){
  var count = 0;
  for(x of data){
    if(x.toLowerCase() === 'a'||x.toLowerCase() === 'e'||x.toLowerCase()  === 'i'||x.toLowerCase() === 'o'||x.toLowerCase() === 'u'){
      count ++;
    }
  }
  return(count);
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));