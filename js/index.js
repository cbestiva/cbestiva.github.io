$(document).ready(function(){
  $(".btn-social").hover(function() {
    $(this).children().fadeOut(100).fadeIn(500).css("color", "#428BCA");
  }, function() {
    $(this).children().css("color", "#333333");
  });
}); 
