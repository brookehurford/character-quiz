$(document).ready(function(){

  $("#blanks form").submit(function(event) {
    var blanksArray = ["fun", "job", "food"];
    var userAnswer = 0;

    blanksArray.forEach(function(blank) {
      userAnswer += parseInt($("select#" + blank).val());ß
    });

    if (userAnswer >= 8) {
      $("#leslie").show();
    }
    else if (userAnswer >= 5 && userAnswer <= 7) {
        $("#tom").show();
    }
    else {
      $("#chris").show();
    }
    event.preventDefault();
  });
});
