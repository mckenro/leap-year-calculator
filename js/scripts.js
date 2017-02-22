//Backend
var leapYear = function(inputYear) {
if ((inputYear % 4 === 0) && (inputYear % 100 !== 0) || (inputYear % 400 === 0)) {
  return true;
  }else {
  return false;
}
};

//Frontend
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userYear = parseInt($("input#year").val());
    var result = leapYPigear(userYear);
    $("#result").text(result);
    //console.log(result);
  });
});
