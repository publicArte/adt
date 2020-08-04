/* Scroll to top Arrow */
  
$(document).ready(function() {

  var scrollTimeout;
    $(window).scroll((evt) => {
      if (scrollTimeout){
        // clear the timeout, if one is pending
        clearTimeout(scrollTimeout);
        scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 250);
      });
      scrollHandler = () => {
        // Check your page position
        if ($(this).scrollTop() > 200){
            $('#top-butt')
            .animate({bottom:17}, "fast",);
        } else {
            $('#top-butt')
            .animate({bottom:-30}, "fast",);
        }
  };

  $("#top-butt").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});

/* Scroll FadeIn */
  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".anim-scroll");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

/* Scroll Slide Left */
  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".slideL-scroll");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("slide-left");
      } else {
        $(tag).removeClass("slide-left");
      }
    }
  });

/* Scroll Slide Right */
  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".slideR-scroll");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("slide-right");
      } else {
        $(tag).removeClass("slide-right");
      }
    }
  });
