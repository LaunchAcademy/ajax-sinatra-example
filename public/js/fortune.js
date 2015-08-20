$("#new-fortune").on("click", function(event) {
  event.preventDefault();
  $.get("/fortunes/random.json", function(newFortune) {
    $("#fortune").text(newFortune.text);
  });
});
