var initialize = function() {
  function hover(element) {
    element.setAttribute('src', 'img/circle_photo2_with_border.png');
  }

  function unhover(element) {
    element.setAttribute('src', 'img/circle_photo_with_border.png');
  }
};

$(document).on('ready page:load', initialize);