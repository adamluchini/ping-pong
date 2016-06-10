var message = "";

$(document).ready(function() {
  $("form#playPingPong").submit(function(event) {

  var NumberToPong = parseInt($("#number").val());
  for (i = 1; i <= NumberToPong; i++) {
    message=i;
    $("#results").append("<li>" + message + "</li>");
    event.preventDefault();
  }
 });
});
