$(function() {
  var duration = 300;
  var breakPoint = 768;
      windowWidth = $(window).width();
      windowHeight = $(window).height();
  // サイドバー
  var $sideBar = $('.sidebar');
  if (windowWidth > breakPoint) {
    $('.side').hover(
      function(){
        $sideBar.addClass('open');
      },
      function() {
        $sideBar.removeClass('open');
      }
    );
  } else {
    $('.menu-button').click(function() {
      $sideBar.toggleClass('open');
    });
  };

  // スムーススクロール
  $(window).resize(function() {
    windowHeight = $(window).height();
    windowWidth = $(window).width();
  });
  $('.side-item').each(function(i) {
    $(this).click(function() {
      if (windowWidth > breakPoint) {
        $("html,body").stop(true).animate({scrollTop: windowHeight * i}, 1000);
      } else {
        var targetTop = $($(this).find("a").attr("href")).offset().top
        $("html,body").stop(true).animate({scrollTop: targetTop}, 1000);
      }
    });
  });

  // worksホバー
  // $('.work-box').each(function() {
  //   if(windowWidth > breakPoint) {
  //     $(this).on('mouseover', function() {
  //       $(this).find('.overlay').stop(true).animate({ opacity: 1 }, duration);
  //     }).on('mouseout', function() {
  //       $(this).find('.overlay').stop(true).animate({ opacity: 0 }, duration);
  //     })
  //   }
  // })
});
