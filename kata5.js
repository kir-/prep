function urlEncode(data){
  newdata = ''
  for(x of data){
    if(x === ' '){
      newdata += '%20';
    }
    else{
      newdata += x;
    }
  }
  return(newdata);
}

console.log(urlEncode('lighthouse labs'));