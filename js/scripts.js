var pigSentence = function(userPhrase) {
  var wordArray = userPhrase.split("");
  var vowels = ["a", "e", "i", "o", "u"];

    for (var x = 0; x < vowels.length; x ++ ) {
      if (vowels[x] === wordArray[0]) {
          $("#result").text(userPhrase + "-way")
        }
    }
};

$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var userPhrase = $("input#phrase").val();
    var result = pigSentence(userPhrase);
    $("#result").text(result);
  });
});


 /* userPhrase.charAt(0); */
