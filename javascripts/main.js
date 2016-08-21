$(function() {
  var hash = location.hash.substr(1);
  if(hash){
    $('#greeting').hide();
  }
  var content_id = '#content_' + hash;
  var selectedClassStr = 'selected';
  $(content_id).addClass(selectedClassStr);
  setTimeout(function(){
    $(content_id).fadeIn(1000);
  },4000);

  $('#tmenu td').click(function(){
    $('#greeting').fadeOut(1000);
    content_id = '#content_' + this.id;
    $('#tmenu').find('a').removeClass(selectedClassStr);
    $('#content_wrap').find('.content').removeClass(selectedClassStr);
    $(this).find('a').addClass(selectedClassStr);
    $(content_id).addClass(selectedClassStr);
    $('#content_wrap').find('.content').fadeOut(1000);
    $(content_id).fadeIn(1000);
  });
});
