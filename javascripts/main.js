$(function() {
  var hash = location.hash.substr(1);

  var content_id = '#content_' + hash;
  var selectedClassStr = 'selected';
  $(content_id).addClass(selectedClassStr);

  if(hash != ''){
    $('#greeting').hide();
    setTimeout(function(){
      $(content_id).fadeIn(1000);
      if(hash == 'about'){
        $('#greeting').css('animation', 'none');
        $('#greeting').fadeIn(1000);
      }
    },4000);
  }

  $('#tmenu td').click(function(){
    console.log(this.id);
    if(this.id != 'about'){
      $('#greeting').fadeOut(1000);
    }else{
      $('#greeting').css('animation', 'none');
      $('#greeting').fadeIn(1000);
    }

    content_id = '#content_' + this.id;
    $('#tmenu').find('a').removeClass(selectedClassStr);
    $('#content_wrap').find('.content').removeClass(selectedClassStr);
    $(this).find('a').addClass(selectedClassStr);
    $(content_id).addClass(selectedClassStr);
    $('#content_wrap').find('.content').fadeOut(1000);
    $(content_id).fadeIn(1000);
  });

  $('#top_logo').click(function(){
    $('#greeting').css('animation', 'none');
    $('#greeting').fadeIn(2000);
    $('#content_wrap').find('.content').fadeOut(1000);
    $('#tmenu').find('a').removeClass(selectedClassStr);
    $('#content_wrap').find('.content').removeClass(selectedClassStr);
  });

});
