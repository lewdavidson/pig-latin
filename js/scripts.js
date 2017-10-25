$(document).ready(function(){
  $("form#pig-form").submit(function(event){
    event.preventDefault();
    var phrase = ("input#phrase").val();
    var result = pigSentence(sort);
    $("#result").text(result);


  });

});
