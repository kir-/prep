function urlDecode(text){
  while(text.includes("%20")){
    text = text.replace("%20"," ");
  }
  var mainDict = {};
  var arrayDict = [];
  if(text.includes('&')){
    var keyList = text.split('&');
    keyList.forEach(function(x){
      arrayDict.push(x.split("="));
    });
    for(var y = 0; y < arrayDict.length; y++){
      mainDict[arrayDict[y][0]] = arrayDict[y][1];
    }
  }
  else{
    arrayDict = text.split("=");
    mainDict[arrayDict[0]] = arrayDict[1];
  }
  return (mainDict);
}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);