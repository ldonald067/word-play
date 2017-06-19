$ (function() {
  $("#form").submit(function(event){
    var userInput = $("#item1").val();

    var userInput = userInput.split(" ");

    var sentence = userInput.map(function(input) {
      if (input.length >= 3) {
        return input;
      }
      else {
        ;
      }
    });
    sentence.reverse();
    sentence = sentence.join(" ");

    $("ul").text(sentence);

    event.preventDefault();

  });
});
