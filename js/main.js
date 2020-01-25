$(function() {
  var duration = 300;
  var breakPoint = 768;
      windowWidth = $(window).width();
      windowHeight = $(window).height();
  // サイドバー
  var $sideBar = $('.sidebar');

  endLoading();

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

  $(window).scroll(function() {
    if (windowWidth < breakPoint) {
      var scrollPos = $(window).scrollTop();

      $(".heading").each(function() {
        var headingOffset = $(this).offset().top;
        if(scrollPos > headingOffset - windowHeight ) {
          $(this).css('opacity', 1).textillate({
            in: {
              effect: 'fadeInLeftBig'
            }
          })
        }
      })
      $(".elem").each(function() {
        var elemOffset = $(this).offset().top;
        if(scrollPos > elemOffset - windowHeight + (windowHeight / 3) ) {
          $(this).addClass('isAnimate');
        }
      });
    }
  });
  $('.randomFadeIn').textillate({
  	minDisplayTime: 3000,	// アニメーションの間隔時間
  	initialDelay: 1600,	// アニメーション開始までの遅延時間
  	autoStart: true,	// アニメーションの自動スタート

  	in: {
  		effect: 'fadeInDown',	// エフェクトの指定
  		delayScale: 1.5,	// 遅延時間の指数
  		delay: 100,	// 文字ごとの遅延時間
  		shuffle: true, // 文字のランダム表示
  	},
  });
  $(".textillate").textillate({
    initialDelay: 1000,
    in: {
      effect: 'bounceInDown',
      delayScale: 1.5,
      delay: 100
    }
  })
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

  function endLoading () {
    $('.loading img').fadeOut(1000, function() {
      $('.loading').slideUp(800);
      $('.main-content').fadeIn();
    });
  }
});
