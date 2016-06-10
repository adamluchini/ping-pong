//business end
var message = "";

//user end
$(document).ready(function() {
  $("form#playPingPong").submit(function(event) {

  var NumberToPong = parseInt($("#number").val());
  for (i = 1; i <= NumberToPong; i++) {
    if (i%15===0){
      message="<strong>Ping Pong</strong>"
    }else if (i%5===0){
      message="<strong>Pong</strong>"
    }else if (i%3===0){
      message="<strong>Ping</strong>"
    }else if (i!==0){
    message=i;
    }else{
    message = "Please enter a valid number"
    }
    $(".list-ping-pong li").remove();
    $("#results").append("<li>" + message + "</li>");
    event.preventDefault();
  }
 });
});
