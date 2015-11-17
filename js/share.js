;(function($){
  "use strict";

  var
    $btn = null,
    $menu = null;

  var init = function(){

    $btn = $(".btn_menu");
    $menu = $(".navigator");

    hoverImg();
    backTop();

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      navigation();
    };

  };
  
  var hoverImg = function(){
    $("a img").on({
      "mouseenter": function(){
        var src = $(this).attr("src").replace("_off","_on");
        $(this).attr("src", src );
      },
      "mouseleave": function(){
        var src = $(this).attr("src").replace("_on","_off");
        $(this).attr("src", src );
      }
    });
  };

  var backTop = function(){
    $(window).scroll(function(){
      if ( $(this).scrollTop() > 200 ){
        $("#backtop").fadeIn();
      } else {
        $("#backtop").fadeOut();
      }
    })
    $("#backtop a").on("click", function(event){
      event.preventDefault();
      $("body, html").animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    $("a[href^='#']").not("#backtop a").on("click", function(event){
      event.preventDefault();
      alert("Website đang trong quá trình thữ nghiệm. Xin hãy quay lại sau. Cám ơn !");
    });
  };

  var navigation = function(){
    $btn.on("click", function(event){
      event.preventDefault();
      var isOpen = $menu.is(":visible");

      if (isOpen){
        $menu.slideUp();
        var src = $(this).find("img").attr("src").replace("_on","_off");
        $(this).find("img").attr("src", src );
      } else {
        $menu.slideDown();
        var src = $(this).find("img").attr("src").replace("_off","_on");
        $(this).find("img").attr("src", src );
      }
    });
  };

  $(function(){
    init();
  });
})(jQuery);