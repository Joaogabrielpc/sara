var c=0;
$("#change").click(function() {
  if (c == 1) {
  acerto();
}

  $("#change").html("<a onclick='acerto()'>Sim!!</a>");
  $("#change1").html("<a onclick='acerto()'>Você é a pessoa mais bonita desse mundo??</a>");


  
  $("#move").show();
  c=1;
});

$("#move").hover(function() {
  change();
});

function acerto() {
  alert("SIM VOCÊ É A PESSOA MAIS LINDA DESSE MUNDO INTEIROO!!! <3");
}





function change()
{
    var i = Math.floor(Math.random()*300)+1;
    var j = Math.floor(Math.random()*400)+1;
    $("#move").css({top: j+'px',left: i+'px'});
}