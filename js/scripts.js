$(document).ready(function(){

  $("#blanks form").submit(function(event) {
<<<<<<< HEAD
    debugger;
=======
>>>>>>> c16b30d2d36a7e10ad8475d373d6c8e08dc220f9
    var blanksArray = ["fun", "job", "food"];
    var userAnswer = 0;

    blanksArray.forEach(function(blank) {
<<<<<<< HEAD
      userAnswer += parseInt($("select#" + blank).val());
=======
      userAnswer += parseInt($("select#" + blank).val());ß
>>>>>>> c16b30d2d36a7e10ad8475d373d6c8e08dc220f9
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
