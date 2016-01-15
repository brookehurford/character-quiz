$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    var blanks = ["fun", "job", "food"];

    blanks.forEach(function(blank) {
      var userAnswer = $("select#" + blank).val();
      $("." + blank).append(userAnswer);
    })

    if (userAnswer === "Go Glamping" && === "Celebrity / Rapper / Business Mogul" && === "Anything from Tom's Bistro");
      $("#tom").show();

    event.preventDefault();
  });
});
