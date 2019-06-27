function organizeInstructors(instructors){
  var instructorList = {};
  instructors.forEach(function addInstructor(instructor){
    if(instructor.course in instructorList){
      instructorList[instructor.course].push(instructor.name) ;
    }
    else{
      instructorList[instructor.course] = [instructor.name];
    }
  });
  return instructorList;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
