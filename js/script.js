$(document).ready(function() {
  $('.dropdown').click(function(e) {
    e.preventDefault();
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      $('.dropdown-menu').toggleClass('mega-menu');
    }
  });
/***********check mobile version*****************/
  if (($(document).width()) < 530) {
    $('section.news').addClass('owl-carousel');
    $('section.indicators').addClass('owl-carousel');
    initCarousel();
  }
  /***********to determinate window height*****************/
  /*  if (($(window).height()) < 740) {
      //console.log('less 640');
      $('.phone-absalute').css( "position", "relative" );
    }*/
  /**********************************************/
/**********************************************/
  $('.wrap-switch-news').on('click', '.switch-news', function() {
    var target = $(this);
    $.get(
        $(this).data('lent-link'),
        {
          ajax: 1,
          offset: $('.block-news').length
        },
        function(answer) {
          $('.wrap-block-news').append(answer);
        }
    ).done(function() {
      target.parent('.wrap-switch-news').next('.hide-blocks-news').slideDown( "slow");
      target.parent('.wrap-switch-news').addClass('undisplayed');
    });
  });

  function initCarousel(){
    $(".owl-carousel").owlCarousel({
      navigation: true, // показывать кнопки next и prev
      slideSpeed: 300,
      paginationSpeed: 400,
      items: 1,
      itemsDesktop: false,
      itemsDesktopSmall: false,
      itemsTablet: false,
      itemsMobile: false
    });
  }

});
