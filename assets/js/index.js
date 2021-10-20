
// =======================================================

// =======================================================

// =======================================================

// =======================================================
//in case js in turned off
$(window).on('load', function () {
  $(".header").removeClass("scroll")
});
$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 1) {
    $(".header").addClass("scroll")
  } else {
    $(".header").removeClass("scroll")
  }
});
// =======================================================
$(document).ready(function(){
  $('.header__menu-burger').click(function(){
    $('.header').toggleClass('active')
    $('body').toggleClass('active')
  })
});