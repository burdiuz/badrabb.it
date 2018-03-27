//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
(function($) {
  $.fn.animated = function(inEffect) {
    $(this).each(function() {
      var ths = $(this);
      ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
          ths.addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: "90%"
      });

    });
  };
})(jQuery);

$(document).ready(function(){

  $(".loader_inner").fadeOut();
  $(".loader").delay(10).fadeOut("slow");
  
  // $html_scroll = $("html").niceScroll({
  //   scrollspeed: 40,
  //   mousescrollstep: 90,
  //   cursorcolor: "#fff",
  //   smoothscroll: true,
  //   zindex: 120,
  //   cursorwidth: "8px",
  //   cursorborderradius: "10px",
  //   cursorborder: "none",
  // });

  change_menu_class();
  $(window).resize(function() {
    change_menu_class();
  });

  function change_menu_class() {
    if ( $(window).width() < 768 ) {
      $(".menu").removeClass("header__menu");
      $(".menu").addClass("mobile_menu");
      $(".menu").hide();
      $(".sandwich").removeClass("active");
    } else {
      $(".menu").removeClass("mobile_menu");
      $(".menu").addClass("header__menu");
      $(".menu").show();
      $(".sandwich").removeClass("active");
    }
  }

  var menu_list = $(".mobile_menu ul").find("li");
  var n = 0;
  $(menu_list).each(function() {
    jQuery(this).find("a").css('animation-delay', '.'+n+'s');
    n++;
  });

  var menu_top_height = 0;
  $(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
    $("header.sticky").toggleClass("mobile_menu_active");
    menu_top_height = $(window).scrollTop();
  });

  $(".mobile_menu ul a").click(function() {
    $(".mobile_menu").fadeOut(600);
    $(".sandwich").toggleClass("active");
  });

  $(".toggle_mnu").click(function() {
    if ($(".mobile_menu").is(":visible")) {
      $(".mobile_menu").fadeOut(600);
      $(".mobile_menu li a").removeClass("fadeInUp animated");
    } else {
      $(".mobile_menu").fadeIn(600);
      $(".mobile_menu li a").addClass("fadeInUp animated");

    };
  });
  
  $(".menu a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
  });

  $(".animation_1").animated("fadeIn");
  $(".animation_2").animated("fadeInLeft");
  $(".animation_3").animated("fadeInRight");
  $(".animation_4").animated("zoomIn");
  $(".animation_5").animated("fadeInUp");
  $(".animation_6").animated("tada");
  $(".animation_7").animated("flash");


});

