var pigSentence = function(userPhrase) {
  return false;
};

$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var userPhrase = $("input#phrase").val();
    var result = pigSentence(userPhrase);
    $("#result").text(result);
  });
});
