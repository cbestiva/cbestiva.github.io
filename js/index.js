$(document).ready(function(){
  $(".btn-social").hover(function() {
    $(this).children().fadeOut(100).fadeIn(500).css("color", "#428BCA");
  }, function() {
    $(this).children().css("color", "#333333");
  });

  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    console.log(target);
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000);
    }
  });
}); 
