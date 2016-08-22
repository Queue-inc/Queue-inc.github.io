$(function() {
  var agent = navigator.userAgent;

  var hash = location.hash.substr(1);

  var content_id = '#content_' + hash;
  var selectedClassStr = 'selected';
  $(content_id).addClass(selectedClassStr);

  if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
    if(hash != ''){
      $('#greeting').hide();
      setTimeout(function(){
        $(content_id).fadeIn(1000);
        if(hash == 'about'){
          $('#greeting').css('animation', 'none');
          $('#greeting').fadeIn(1000);
          $('#navToggle').css('animation', 'none');
          $('#greeting').fadeIn(1000);
        }
      },2000);
    }
  }else{
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

  $('#navToggle').click(function(){
    $('#sp_menu').toggleClass('openNav');
    $('#sp_menu').find('nav').toggleClass('selected');
  });

  $('.sp_menu_link').click(function(){
    if(this.id != 'about'){
      $('#greeting').fadeOut(1000);
    }else{
      $('#greeting').css('animation', 'none');
      $('#greeting').fadeIn(1000);
    }

    content_id = '#content_' + this.id;
    $('#content_wrap').find('.content').removeClass(selectedClassStr);
    $(this).find('a').addClass(selectedClassStr);
    $(content_id).addClass(selectedClassStr);
    $('#content_wrap').find('.content').fadeOut(1000);
    $(content_id).fadeIn(1000);

    $('#sp_menu').toggleClass('openNav');
    $('#sp_menu').find('nav').toggleClass('selected');
  });

});
