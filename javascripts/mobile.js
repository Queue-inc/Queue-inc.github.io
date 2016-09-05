$(function() {
  $('#navToggle').click(function(){
    $('#sp_menu').toggleClass('openNav');
    $('#sp_menu').find('nav').toggleClass('selected');
  });
});
