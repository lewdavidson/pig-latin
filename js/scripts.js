var pigSentence = function(userPhrase) {
  var wordArray = userPhrase.split("");
  var vowels = ["a", "e", "i", "o", "u"];

    for (var x = 0; x < vowels.length; x ++ ) {
      if (vowels[x] === wordArray[0]) {
          $("#result").text(userPhrase + "-way");
        } else if ((vowels[x] !== wordArray[0]) && (vowels[x] !== wordArray[1]) && (vowels[x] !== wordArray[2])) {
          var letter1 = userPhrase.charAt(0);
          var letter2 = userPhrase.charAt(1);
          var letter3 = userPhrase.charAt(2);
          var theCut = userPhrase.substr(3);
          var newThing = theCut + letter1 + letter2 + letter3 + "ay";
          return newThing
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

 // for (var index = 0; x < consonants.length; x ++ ) {
 //   if (consonants[index] === wordArray[0]) {
 //     debugger
 //   }
 // }

//  var consonant = userPhrase.substring(0,1);
