$(function() {
  $('#tmenu td').click(function(){
    var selectedClassStr = 'selected';
    var content_id = '#content_' + this.id;
    $('#tmenu').find('a').removeClass(selectedClassStr);
    $('#content_wrap').find('.content').removeClass(selectedClassStr);
    $(this).find('a').addClass(selectedClassStr);
    $(content_id).addClass(selectedClassStr);
    $('#content_wrap').find('.content').fadeOut(1000);
    $(content_id).fadeIn(1000);
  });
});
