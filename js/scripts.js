// //business end
// var message = "";
//
// //user end
// $(document).ready(function() {
//   $("form#playPingPong").submit(function(event) {
//     $("li").remove(); /*for removing existing result*/
//
//   var NumberToPong = parseInt($("#number").val());
//   for (i = 1; i <= NumberToPong; i++) {
//     if (i%15===0){
//       message="<strong>Ping Pong</strong>"
//     }else if (i%5===0){
//       message="<strong>Pong</strong>"
//     }else if (i%3===0){
//       message="<strong>Ping</strong>"
//     }else if (i!==0){
//     message=i;
//     }else{
//     alert("Please enter a valid number");
//     }
// $("#results").append("<li>" + message + "</li>");
//     event.preventDefault();
//   $(".ping-pong-list").show(); /*for showing new result*/
//   }
//  });
// });
//````````````````````RESUBMIT``````````````````````````````````````````````````
//business end logic:

var pingPong = function(NumbertoPong) {
  var array = []
  for (var i=1; i<=NumbertoPong; i++){
    if (i%15===0){
      array.push("PingPong");
    } else if (i%3 ===0){
      array.push("Ping");
    } else if (i%5 ===0){
      array.push("Pong");
    }else{
      array.push(i);
    }
  }
  return array;
};

// user interface:

$(document).ready(function() {
  $("form#playPingPong").submit(function(event){
    var NumberToPong = parseInt($("input#number").val());
    var pingPongOutput = pingPong(NumberToPong);
    $("li").remove();
    pingPongOutput.forEach(function(i){
      $("#playPingPong").append("<li>" + i + "</li>");
    });
    $(".ping-pong-list").show();
    event.preventDefault();
  });
});
