;(function($){
  "use strict";
  
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

  $(function(){
    hoverImg();
    backTop();
  });
})(jQuery);