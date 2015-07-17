$(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    var itemTop = $('#mobile_nav_trigger').position().top;

    if(Math.abs(lastScrollTop - st) <= delta) {
      return;
    }
    if ((st > lastScrollTop && st > navbarHeight) || (lastScrollTop > st && itemTop > navbarHeight)){
      $('#nav_trigger_label').addClass('hide_nav_button');
      $('#mobile_nav_trigger').addClass('hide_nav_button');
    } else if (st + winHeight < docHeight) {
      $('#nav_trigger_label').removeClass('hide_nav_button');
      $('#nav-trigger').removeClass('hide-nav-button');
    }
    lastScrollTop = st;
  }
});
