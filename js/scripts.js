//business end
var message = "";

//user end
$(document).ready(function() {
  $("form#playPingPong").submit(function(event) {

  var NumberToPong = parseInt($("#number").val());
  for (i = 1; i <= NumberToPong; i++) {
    if (i%15===0){
      message="Ping Pong"
    }else if (i%5===0){
      message="Pong"
    }else if (i%3===0){
      message="Ping"
    }else{
    message=i;
    }
    $("#results").append("<li>" + message + "</li>");
    event.preventDefault();
  }
 });
});
