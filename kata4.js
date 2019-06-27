function instructorWithLongestName(instructors){
  var longestName = instructors[0].name.length;
  var place = 0;
  instructors.forEach(function nameCheck(instructor,index){
    if (longestName < instructor.name.length){
      longestName = instructor.name.length;
      place = index;
    }
  });
  return(instructors[place]);
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));