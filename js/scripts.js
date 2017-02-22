//Backend
var leapYear = function(inputYear) {
if ((inputYear % 4 === 0) && (inputYear % 100 !== 0) || (inputYear % 400 === 0)) {
  return true;
  }else {
  return false;
}
};

$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var inputYear = parseInt($("input#year").val());
    var result = leapYear(inputYear);
    $("#result").text(result);
    //console.log(result);
  });
});




// The program should return when a year is not a leap year.
// Input Example: 1993
// Output Example: false



// The program should return 'true' for years divisible by 4, since those are leap years.
// Input Example: 2004
// Output Example: true
// The program should return 'false' for years divisible by 100, since those are not leap years.
// Input Example: 1900
// Output Example: false
// The program should return 'true' for years divisible by 400, since those are leap years.
// Input Example: 2000
// Output Example: true
