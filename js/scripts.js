$(document).ready(function(){
  $(".clickable").click(function(){
    $("#img-showing").slideToggle();
    $("#img-hidden").slideToggle();
  });
});