function makeCase(input, wordCase){
    var string2 = '';
    var string3 = '';
    var string4 = '';
    var flag = false;
    var flag2 = false;
    var flag3 = false;
    if (wordCase.includes('camel')){
      for (x of input){
        if (x !== ' '){
          if(flag===true){
            string2 += x.toUpperCase();
            flag = false;
          }
          else{
            string2 += x;
          }
        }
        else{
          flag = true;
        }
      }
    }
    else if (wordCase.includes('pascal')){
      flag = true;
      for (x of input){
        if (x !== ' '){
          if(flag===true){
            string2 += x.toUpperCase();
            flag = false;
          }
          else{
            string2 += x;
          }
        }
        else{
          flag = true;
        }
      }
    }
    else if (wordCase.includes('snake')){
      for (x of input){
        if (x === ' '){
            string2 += '_';
          }
          else{
            string2 += x;
          }
      }
    }
    else if (wordCase.includes('kebab')){
      for (x of input){
        if (x === ' '){
            string2 += '-';
          }
          else{
            string2 += x;
          }
      }
    }
    else if (wordCase.includes('title')){
      flag = true;
      for (x of input){
        if (x !== ' '){
          if(flag===true){
            string2 += x.toUpperCase();
            flag = false;
          }
          else{
            string2 += x;
          }
        }
        else{
          string2 += x;
          flag = true;
        }
      }
    }
    if (wordCase.includes('vowel')){
      if (string2 === ''){
        for (x of input){
          if (x === "a"||x === "e"||x === "i"||x === "o"||x === "u"){
              string2 += x.toUpperCase();
            }
          else{
            string2 += x;
          }
        }
      }
      else{
        for (x of string2){
          if (x === "a"||x === "e"||x === "i"||x === "o"||x === "u"){
              string3 += x.toUpperCase();
            }
          else{
            string3 += x;
          }
        }
        flag2 = true;
      }
    }
    else if (wordCase.includes('consonant')){
      if (string2 === ''){
        for (x of input){
          if (x !== "a" && x !== "e" && x !== "i" && x !== "o" && x !== "u"){
            string2 += x.toUpperCase();
          }
          else{
            string2 += x;
          }
        }
      }
      else{
        for (x of string2){
          if (x !== "a" && x !== "e" && x !== "i" && x !== "o" && x !== "u"){
            string3 += x.toUpperCase();
          }
          else{
            string3 += x;
          }
        }
        flag2 = true;
      }
    }
    if (wordCase.includes('upper')){
      if (string2 === ''){
        for (x of input){
          string2 += x.toUpperCase();
        }
      }
      else if(flag2 === true){
        for (x of string3){
          string4 += x.toUpperCase();
        } 
        flag3 = true;
      }
      else{
        for (x of string2){
          string3 += x.toUpperCase();
        } 
        flag2 = true;
      }
    }
    else if (wordCase.includes('lower')){
      if (string2 === ''){
        for (x of input){
          string2 += x.toLowerCase();
        }
      }
      else if(flag2 === true){
        for (x of string3){
          string4 += x.toLowerCase();
        } 
        flag3 = true;
      }
      else{
        for (x of string2){
          string3 += x.toLowerCase();
        } 
        flag2 = true;
      }
    }
    if(flag3 === true){
      return (string4);
    }
    else if(flag2 === true){
      return (string3);
    }
    else{
      return (string2);
    }
  
}

console.log(makeCase("this is a string", ["consonant"]));