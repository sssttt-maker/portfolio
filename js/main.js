$(function() {
  var duration = 300;
  // サイドバー
  var $sideBar = $('.sidebar')
  $('.side').hover(
    function(){
      $sideBar.stop(false).animate({ left: '60px' }, duration);
    },
    function() {
      $sideBar.stop(false).animate({ left: '-350px' }, duration);
    });

  // スムーススクロール
  var windowHeight = $(window).height();
  $(window).resize(function() {
    windowHeight = $(window).height();
  });
  $('.side-item').each(function(i) {
    $(this).click(function() {
      $("html,body").stop(true).animate({scrollTop: windowHeight * i}, 1000);
    });
  });

  // worksホバー
  $('.work-box').each(function() {
    $(this).on('mouseover', function() {
      $(this).find('.overlay').stop(true).animate({ opacity: 1 }, duration);
    }).on('mouseout', function() {
      $(this).find('.overlay').stop(true).animate({ opacity: 0 }, duration);
    })
  })

});
