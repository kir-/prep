function talkingCalendar(date){
  var monthDict = {
    01 : "January" , 
    02 : "February" , 
    03 : "March" , 
    04 : "April" , 
    05 : "May" , 
    06 : "June" , 
    07 : "July" , 
    08 : "August" , 
    09 : "September" , 
    10 : "October" , 
    11 : "November" , 
    12 : "December"
  };
  var dayDict = {
    1 : "st",
    2 : "nd",
    3 : "rd",
    4 : "th",
    5 : "th",
    6 : "th",
    7 : "th",
    8 : "th",
    9 : "th",
    0 : "th",

  };
  var year = date.slice(0,4);
  var month = date.slice(5,7);
  var day = date.slice(8);
  if (day[0] === '0'){
    day = day[1];
  }
  var stringFinal = monthDict[month] + " " + day + dayDict[day] + ", " + year;
  return (stringFinal);
}

console.log(talkingCalendar("2017/12/02"));