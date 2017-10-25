var pigSentence = function(userPhrase) {
  var wordArray = userPhrase.split("");
  var vowels = ["a", "e", "i", "o", "u"];
    debugger
    for (var index = 0; index === wordArray.length >= 1 ; index ++ ) { for (var vindex = 0; vowel.length <= 5; vindex ++) {
      debugger
      if (wordArray[index] === vindex[index]) {
        debugger
          wordArray.join();
          $("#result").text(wordArray + "-way")
        }
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
