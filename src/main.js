$(document).ready(function(){
  const animate = $('.animate');
  animate.hide();
  setTimeout(() => animate.slideDown(), 500);
  $('header').height($(window).height()/1.2);
});
